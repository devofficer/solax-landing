import React, { useEffect, useState } from "react";

import { defaults, Chart, Tooltip, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useDebounce } from "use-debounce";

import { Col, Row } from "components";
import { tokenomics_list } from "utils";

Chart.register(ArcElement, Tooltip);

defaults.font.family = "Encode Sans";

if (defaults.animation) {
  defaults.animation.duration = 1000;
  defaults.animation.delay = 2000;
}

const Tokenomics = () => {
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [isUpdated, setIsUpdated] = useState(true);
  const [delayedSegment] = useDebounce(segmentIndex, 30);

  useEffect(() => {
    setIsUpdated(false);
    setTimeout(() => {
      setIsUpdated(true);
    }, 100);
  }, [delayedSegment]);

  const chartData = {
    datasets: [
      {
        data: [20, 4, 18, 7, 4, 22, 10, 15],
        backgroundColor: ["#7AFFF7", "#00F8EC", "#43F3EA", "#70CCE3", "#C498FC", "#B29FFF", "#8DACFA", "#68DCEF"],
        hoverOffset: 25,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    // showAllTooltips: true,
    elements: {
      arc: {
        borderWidth: 4,
        borderColor: "#000000",
      },
    },
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
      },
      tooltip: {
        enabled: false,
        callbacks: {
          label: (context: any) => ` ${tokenomics_list[delayedSegment].title}`,
        },
      },
    },
    onHover: (evt: any, item: any) => {
      if (item[0]?.index !== undefined) {
        setSegmentIndex(item[0]?.index);
      }
    },
  };

  return (
    <div>
      <Row animate="fade-in" className="pt-[11px] items-center justify-center space-x-[9px] normal:space-x-0">
        <p className="mb-14 normal:mb-5 uppercase font-bold text-[48px] leading-[60px] normal:text-[32px] normal:leading-[40px] text-transparent bg-text_gradient2 animate-gradient bg-clip-text">
          $SAX Token
        </p>
      </Row>
      <Col animate="fade-in" delay={500} className="pt-[11px] tablet:pt-[30px] mobile:pt-[25px]">
        <div className="w-full py-[19px] bg-border_gradient rounded-[20px_20px_0px_0px] text-center">
          <p className="uppercase font-bold text-black text-[32px] leading-[40px] normal:text-[24px] normal:leading-[30px]">Tokenomics</p>
        </div>
        <Row className="pt-[41px] pb-[38px] tablet:pt-[66px] tablet:pb-[67px] normal:pt-[40px] normal:pb-[31px] px-[16%] laptop:px-[38px] normal:px-[15px] normal:flex-col justify-between space-x-20 desktop:space-x-14 laptop:space-x-8 normal:space-x-0 normal:space-y-11 bg-card_normal rounded-[0px_0px_20px_20px]">
          <div className="relative tablet:m-auto w-[300px] h-[300px] last:w-[260px] last:h-[260px]">
            <Doughnut data={chartData} options={doughnutOptions} />
          </div>
          <div className="self-center m-auto w-[316px] last:w-[250px] tablet:h-[226px]">
            {isUpdated && (
              <div data-aos="fade-in" data-aos-duration="600" className="pt-[40px] laptop:pt-[10px]">
                <p className="pb-[9px] mb-[19px] whitespace-nowrap uppercase border-b-2 border-tokenomics text-tokenomics font-bold text-[24px] tablet:text-[23px] last:text-[18px] leading-[30px]">
                  {tokenomics_list[delayedSegment].title}{" "}
                  {tokenomics_list[delayedSegment].price && <span>({tokenomics_list[delayedSegment].price})</span>}
                </p>
                <Col className="space-y-[20px] font-semibold text-[16px] last:text-[14px]">
                  <Row className="justify-between">
                    <p className="uppercase font-medium text-[#ffffff30]">% Of Supply</p>
                    <p>{tokenomics_list[delayedSegment].info.part}%</p>
                  </Row>
                  <Row className="justify-between">
                    <p className="uppercase font-medium text-[#ffffff30]">Initial Unlock</p>
                    <p>{tokenomics_list[delayedSegment].info.initialUnlock}%</p>
                  </Row>
                  <Row className="justify-between">
                    <p className="uppercase font-medium text-[#ffffff30]">Lock up</p>
                    <p>{tokenomics_list[delayedSegment].info.lockUp}</p>
                  </Row>
                  <Row className="justify-between">
                    <p className="uppercase font-medium text-[#ffffff30]">Vesting</p>
                    <p>{tokenomics_list[delayedSegment].info.vesting}</p>
                  </Row>
                </Col>
              </div>
            )}
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Tokenomics;
