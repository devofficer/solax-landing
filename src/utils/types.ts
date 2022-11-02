import type { MouseEventHandler } from "react";
import type { StaticImageData } from "next/image";

// extra class props to customize components
export interface ExtraTWClassProps {
  className?: string;
}

// types for template view
export interface TemplateViewProps {
  title: string;
}

// types for aos
export interface AOSProps {
  animate?: string;
  delay?: string | number;
  duration?: string | number;
  offset?: string | number;
}

// types for notification
export interface NotificationProps {
  type?: string;
  title: string;
  message: string;
  link?: string;
}

// types for button
export interface ButtonProps {
  action?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
}

// types for page seo
export interface PageProps {
  name: string;
}

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

// types for custom image
export interface ImageLoaderProps {
  src: string;
  width?: number;
  height?: number;
}

export interface ImagePlaceholderProps {
  placeholder?: "empty" | "blur";
  blurDataURL?: string;
}

export interface ImageProps {
  src?: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
  mode?: "intrinsic" | "fill";
  oFit?: "cover" | "contain" | "none" | "fill";
  quality?: string | number;
  loadOption?: "lazy" | "eager" | undefined;
  oPosition?: "top" | "bottom" | "right" | "left" | "initial";
  priority?: boolean;
  [key: string]: any;
}
