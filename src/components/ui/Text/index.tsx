import { ReactNode } from "react";

type TextVariant = "title" | "subtitle" | "body" | "small";
type TextWeight = "normal" | "bold" | "light";
type ThemeColor = "primary" | "secondary" | "highlight" | "text";

interface TextProps {
  variant?: TextVariant;
  color?: ThemeColor;
  weight?: TextWeight;
  children: ReactNode;
  className?: string;
}

const styles: Record<TextVariant, React.CSSProperties> = {
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "700",
  },
  body: {
    fontSize: "14px",
    fontWeight: "400",
  },
  small: {
    fontSize: "12px",
    fontWeight: "300",
  },
};

const fontWeight: Record<TextWeight, string | number> = {
  normal: 400,
  bold: 700,
  light: 200,
}

export function Text({ variant = "body", color = "text", weight, children, className }: TextProps) {
  return (
    <span style={{ ...styles[variant], color: `var(--${color}-color)`, ...(weight && { fontWeight: fontWeight[weight] }) }} className={className}>{children}</span>
  )
}
