import { Notification } from "components";
import type { ImageLoaderProps } from "./types";

export const isEmpty = (value: unknown) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const loadImage = ({ src, width, height }: ImageLoaderProps) => {
  return `${src}?w=${width}?h=${height}`;
};

// handle overflow
export const handleAdjustOverflow = (isOpen: boolean) => {
  isOpen ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "scroll");
};

// handle errors
export const handleErrors = (err: any) => {
  console.log(err, "err");
  let msg = err.message;
  try {
    if (err.logs) {
      const log = err.logs.find((log: string) => log.includes("Error Number:"));
      msg = log.substring(log.indexOf("Error Message:") + 14, log.length);
    }
  } catch (error) {
    console.log(error, "error");
  }

  Notification({ type: "error", title: "Transaction failure", message: msg });
};
