import dynamic from "next/dynamic";

export const CopyRight = dynamic(import("./copyright"));
export const Documents = dynamic(import("./documents"));
export const Hero = dynamic(import("./hero"));
export const JoinSale = dynamic(import("./join-sale"));
export const PrivateSale = dynamic(import("./private-sale"));
export const ProtocolFeature = dynamic(import("./protocol-feature"));
export const Social = dynamic(import("./social"));
export const Template = dynamic(import("./template"));
export const TokenDetails = dynamic(import("./token-details"));
export const Token = dynamic(import("./token"));
export const TrustBy = dynamic(import("./trust-by"));
export const UseCase = dynamic(import("./use-case"));
