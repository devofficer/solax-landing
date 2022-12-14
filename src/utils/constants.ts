import { RiTwitterFill as Twitter, RiMediumFill as Medium, RiDiscordFill as Discord } from "react-icons/ri";

import type { SeoProps } from "./types";

// images for protocol features
import DEEP_LIQUIDITY_SWAP from "assets/images/deep_liquidity_swap@4x.png";
import CROSS_CHAIN from "assets/images/cross_chain@4x.png";
import LIQUIDITY_POOL from "assets/images/liquidity_pool@4x.png";
// images for use-case
import DEEP_LIQUIDITY from "assets/images/deep_liquidity@4x.png";
import HIGH_APY from "assets/images/high_apy@4x.png";
import INSTANT_LIQUIDITY from "assets/images/instant_liquidity@4x.png";
import STAKING_REWARDS from "assets/images/staking_rewards@4x.png";
// images for private sale
import TOKEN_PRICE from "assets/images/token_price@4x.png";
import CURRENT_DISCOUNT from "assets/images/current_discount@4x.png";
import MINIMUM_INVESTMENT from "assets/images/minimum_investment@4x.png";

// pattern list
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const telegramRegex = /((https?:\/\/)?(www[.])?(telegram|t)\.me\/|@)([a-zA-Z0-9_-]*)\/?$/;
export const discordRegex = /^((.+?)#\d{4})/;

// seo list
export const seo_list: { [any: string]: SeoProps } = {
  default: { title: "SOLA-X", description: "Smart liquidity cross-chain protocol powered by Solana.", image: "/preview/default.png" },
  details: {
    title: "SOLA-X | Token Details",
    description:
      "$SAX token holders can stake their tokens a earn trading rewards or trade with discounts. $SAX staking will also be part of smart liquidity routing.",
    image: "/preview/default.png",
    canonical: "details",
  },
  404: {
    title: "404 | Page Not Found",
    description: "Smart liquidity cross-chain protocol powered by Solana.",
    image: "/preview/default.png",
    canonical: "404",
  },
  500: {
    title: "500 | Server Error",
    description: "Smart liquidity cross-chain protocol powered by Solana.",
    image: "/preview/default.png",
    canonical: "500",
  },
};

// menu list
export const menu_list = [
  { name: "Home", path: "/" },
  { name: "$Sax Token", path: "/sax" },
  { name: "Docs", path: "https://docs.solax.so/" },
];

// feature list
export const feature_list = [
  {
    title: "Deep Liquidity Swaps",
    details: "Enjoy instant swaps between pairs with minimal slippage, low transaction costs or swap fees.",
    image: DEEP_LIQUIDITY_SWAP,
    alt: "Deep Liquidity SWAP",
    width: 235,
    height: 237,
    type: 0,
    delay: 300,
    animationDelay: "animation-delay-500",
  },
  // {
  //   title: "CROSS-CHAIN",
  //   details: "Our integrated bridge enables cross-chain functions and integrates the most popular EVM ecosystems.",
  //   image: CROSS_CHAIN,
  //   alt: "CROSS-CHAIN",
  //   width: 257,
  //   height: 286,
  //   type: 1,
  //   delay: 600,
  //   animationDelay: "animation-delay-1000",
  // },
  {
    title: "Smart liquidity protocol",
    details:
      "Our smart liquidity routing feature manages the liquidity in a way that single pool risks are minimized and the realized APY is the highest possible. A user only has to deposit one single asset in order to provide liquidity to multiple pools.",
    image: LIQUIDITY_POOL,
    alt: "SMART LIQUIDITY POOL",
    width: 215,
    height: 257,
    type: 2,
    delay: 900,
    animationDelay: "animation-delay-1500",
  },
];

// use-case list
export const use_case_list = [
  {
    label: "FOR TRADERS",
    title: "Deep Liquidity",
    details: "Users can instantly swap their tokens against native tokens or other wrapped tokens with deep liquidity and low slippage.",
    image: DEEP_LIQUIDITY,
    alt: "DEEP LIQUIDITY",
    width: 151,
    height: 181,
    bg_color: "bg-card_gradient1",
    box_shadow: "shadow-card_box1",
    delay: 300,
    animationDelay: "animation-delay-1000",
  },
  {
    label: "LIQUIDITY PROVIDERS",
    title: "High APY",
    details:
      "Inner platform yield optimization and our smart liquidity routing feature ensure the most efficient use of the provided liquidity and eliminate the risks of impermanent loss due to single and multi asset liquidity pools.",
    image: HIGH_APY,
    alt: "HIGH APY",
    width: 185,
    height: 206,
    bg_color: "bg-card_gradient2",
    box_shadow: "shadow-card_box2",
    delay: 600,
    animationDelay: "animation-delay-1500",
  },
  {
    label: "PROJECTS",
    title: "Instant Liqidity",
    details: "Projects can easily bootstrap liquidity thanks to our flexible liquidity pools and smart liquidity routing.",
    image: INSTANT_LIQUIDITY,
    alt: "INSTANT LIQUIDITY",
    width: 171,
    height: 194,
    bg_color: "bg-card_gradient3",
    box_shadow: "shadow-card_box3",
    delay: 300,
    animationDelay: "animation-delay-2000",
  },
  {
    label: "$SAX HOLDERS",
    title: "High Staking Rewards",
    details:
      "$SAX token holders can stake their tokens and earn staking rewards or trade with discounts. In the future, governance will be added as a utility to $SAX.",
    image: STAKING_REWARDS,
    alt: "STAKING REWARDS",
    width: 203,
    height: 178,
    bg_color: "bg-card_gradient4",
    box_shadow: "shadow-card_box4",
    delay: 600,
    animationDelay: "animation-delay-2500",
  },
];

// resource list
export const resource_list = [
  { name: "github", path: "https://github.com/solaxlabs" },
  { name: "white paper", path: "https://drive.google.com/file/d/1eA3K8mfEG_SUN2VF_9r8Of2k23p8i3j7/view?usp=sharing" },
  { name: "pitch deck", path: "https://drive.google.com/file/d/1FA8TMHwu3aRvvCG6FfYvyWXuSIY0qPY-/view?usp=sharing" },
  // { name: "coingecko", path: "" },
  { name: "coinmarketcap", path: "https://coinmarketcap.com/currencies/sola-x/ico/" },
];

// contact list
export const contact_list = [{ name: "hello@solax.app" }];

// social list
export const social_list = [
  { label: "Twitter", icon: Twitter, path: "https://twitter.com/solaxapp" },
  { label: "Medium", icon: Medium, path: "https://medium.com/@solaxapp" },
  { label: "Discord", icon: Discord, path: "https://discord.gg/SfkybtttdC" },
];

export const partner_site_list = [
  { label: "lithium.ventures", path: "https://lithium.ventures", icon: "/images/logos/Lithium.png", width: 175, height: 34 },
  { label: "consola.finance", path: "https://consola.finance", icon: "/images/logos/Consola.png", width: 146, height: 33 },
  { label: "vt3", path: "https://twitter.com/vt3ventures", icon: "/images/logos/vt3.png", width: 170, height: 34 },
  {
    label: "Handelsblatt",
    path: "https://award.handelsblatt.com/university-challenge/award-2022/?lang=en",
    icon: "/images/logos/Handelsblatt.png",
    width: 172,
    height: 25,
  },
  {
    label: "award",
    path: "https://www.frankfurt-school.de/home/research/centres/blockchain",
    icon: "/images/logos/FSFM.png",
    width: 161,
    height: 34,
  },
];

// private sale list
export const private_sale_list = [
  {
    title1: "Token",
    title2: "Price",
    value: "$0.035",
    image: TOKEN_PRICE,
    alt: "Token Price",
    width: 116,
    height: 150,
    type: 0,
    delay: 300,
    animationDelay: "animation-delay-500",
    tabletWidth: "laptop:w-[116px]",
  },
  {
    title1: "Current",
    title2: "Discount",
    value: "30%",
    image: CURRENT_DISCOUNT,
    alt: "Current Discount",
    width: 125,
    height: 148,
    type: 1,
    delay: 600,
    animationDelay: "animation-delay-1000",
    tabletWidth: "laptop:w-[125px]",
  },
  {
    title1: "Minimum",
    title2: "Investment",
    value: "$10,000",
    image: MINIMUM_INVESTMENT,
    alt: "Minimum Investment",
    width: 99,
    height: 157,
    type: 2,
    delay: 900,
    animationDelay: "animation-delay-1500",
    tabletWidth: "laptop:w-[100px]",
  },
];

// general info list
export const general_info_list = [
  { title: "Initial Price", value: "$0.050" },
  { title: "Max, Token Supply", value: "500,000,000" },
  { title: "Initial Marketcap", value: "$780,000" },
  { title: "Initial Circulation Supply", value: "15,600,000" },
  { title: "Fully Diluted Market Cap", value: "$25,000,000" },
  {
    title: "$SAX Token",
    value: "SAX2...uiqa ",
    path: "https://solscan.io/token/SAX2cChnuhnKfUDERWVHyd8CoeDNR4NjoxwjuW8uiqa",
  },
];

// token utility list
export const token_utility_list = [
  { title: "Tier 1", value: "4,000", percentage: "4%", bg: "bg-[#43DDD6]" },
  { title: "Tier 2", value: "8,000", percentage: "8%", bg: "bg-[#008680]" },
  { title: "Tier 3", value: "16,000", percentage: "16%", bg: "bg-[#00A29A]" },
  { title: "Tier 4", value: "32,000", percentage: "32%", bg: "bg-[#00B1A9]" },
  { title: "Tier 5", value: "64,000", percentage: "64%", bg: "bg-[#00BCB4]" },
];

export const tokenomics_list: { [any: string]: any } = {
  0: {
    title: "Private Sale",
    price: "$0.035",
    info: {
      part: 20,
      initialUnlock: 0,
      lockUp: "6 months",
      vesting: "8 months",
    },
  },
  1: {
    title: "IDO",
    price: "$0.050",
    info: {
      part: 4,
      initialUnlock: 20,
      lockUp: "3 months",
      vesting: "4 months",
    },
  },
  2: {
    title: "Team & Advisors",
    info: {
      part: 18,
      initialUnlock: 0,
      lockUp: "6 months",
      vesting: "16 months",
    },
  },
  3: {
    title: "Platform Development",
    info: {
      part: 7,
      initialUnlock: 4,
      lockUp: "3 months",
      vesting: "24 months",
    },
  },
  4: {
    title: "Marketing & Airdrops",
    info: {
      part: 4,
      initialUnlock: 4,
      lockUp: "0 months",
      vesting: "24 months",
    },
  },
  5: {
    title: "Ecosystem Development",
    info: {
      part: 22,
      initialUnlock: 4,
      lockUp: "0 months",
      vesting: "24 months",
    },
  },
  6: {
    title: "Reserve",
    info: {
      part: 10,
      initialUnlock: 4,
      lockUp: "On-demand",
      vesting: "Flexible",
    },
  },
  7: {
    title: "Liquidity",
    info: {
      part: 15,
      initialUnlock: 5,
      lockUp: "3 months",
      vesting: "24 months",
    },
  },
};
