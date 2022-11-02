import React, { useRef, useState } from "react";

import { Button, Image, Notification, Row } from "components";
import { useMainAction } from "contexts";
import { discordRegex, emailRegex, handleErrors, telegramRegex } from "utils";

import JOIN_SALE from "assets/images/join_sale@4x.png";

const JoinSale = () => {
  const { isActionLoading, setIsActionLoading } = useMainAction();
  const contactInfoRef = useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async () => {
    setIsActionLoading(true);
    const contactInfo = contactInfoRef.current?.value;
    let contactType = "";
    if (contactInfo) {
      setHasError(false);
      if (contactInfoRef.current?.value.match(emailRegex)) {
        contactType = "email";
      } else if (contactInfoRef.current?.value.match(telegramRegex)) {
        contactType = "telegram";
      } else if (contactInfoRef.current?.value.match(discordRegex)) {
        contactType = "discord";
      } else {
        contactType = "";
      }

      if (contactType) {
        try {
          const url = "/api/contact/add";
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ contactType: contactType, contactInfo: contactInfo }),
          };

          const res = await fetch(url, options);
          const result = await res.json();

          if (result.success === 1) {
            Notification({ type: "success", title: "Success", message: "Submitted us your contact info!" });
          } else if (result.success === 2) {
            Notification({ type: "warn", title: "Warning", message: "You have already submitted!" });
          } else {
            Notification({ type: "error", title: "Failure", message: "Unknown Error!" });
          }

          setIsActionLoading(false);
        } catch (error) {
          setHasError(true);
          setIsActionLoading(false);
          handleErrors(error);
        }
      } else {
        setHasError(true);
        setIsActionLoading(false);
        Notification({ type: "error", title: "Failure", message: "Invalid contact info! Please try with other" });
      }
    } else {
      setHasError(true);
      setIsActionLoading(false);
    }
  };

  return (
    <div className="pt-[287px] laptop:pt-[152px] pb-[140px] tablet:pb-[100px] mobile:pb-[80px]">
      <div
        data-aos="fade-in"
        className="relative w-[100%] pl-[30%] desktop:pl-[32%] laptop:pl-[34%] pt-[55px] desktop:pt-[51px] pr-[30px] desktop:pr-[46px] pb-[52px] normal:pb-[34px] normal:px-[15px] rounded-[20px] bg-card_normal"
      >
        <Row className="normal:relative normal:space-x-[110px]">
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="animate-up_back absolute -top-36 desktop:-top-10 normal:-top-36 -left-16 desktop:-left-2 normal:-left-3 desktop:w-[191px] normal:w-[102px]"
          >
            <Image src={JOIN_SALE} alt="Join Sale" width={287} height={575} />
          </div>
          <p className="uppercase font-bold text-[48px] desktop:text-[36px] normal:text-[28px] last:text-[18px] leading-[60px] desktop:leading-[45px] normal:leading-[35px] whitespace-nowrap normal:whitespace-pre-wrap">
            Join Our Private Sale
          </p>
        </Row>
        <p className="pt-[27px] pb-[35px] tablet:py-[26px] font-bold text-[16px] last:text-[14px] leading-[20px]">
          Just type in your email address or Discord/Telegram ID and we will reach out to you.
        </p>
        <div className="relative w-[68%] desktop:w-full font-semibold text-[16px] leading-[20px]">
          <input
            type="text"
            ref={contactInfoRef}
            placeholder={hasError ? "Please enter your contacts" : "Email/Discord/Telegram"}
            className={`px-[29px] pr-[94px] py-[16px] w-full bg-transparent border ${
              hasError ? "border-error placeholder:text-error" : "border-white placeholder:text-white"
            } rounded-full`}
          />
          <Button action={handleSubmit} isLoading={isActionLoading} disabled={isActionLoading} className="absolute inset-y-0 right-0">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinSale;
