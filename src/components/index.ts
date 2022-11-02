import dynamic from "next/dynamic";

export const Border = dynamic(import("./Border"));
export const Button = dynamic(import("./Button"));
export const Col = dynamic(import("./Col"));
export const Container = dynamic(import("./Container"));
export const Image = dynamic(import("./Image"));
export const Page = dynamic(import("./Page"));
export const Row = dynamic(import("./Row"));
export const Seo = dynamic(import("./Seo"));
export { default as Notification } from "./Notification";
