import { ReactNode } from "react";

type TextVariant = "title" | "subtitle" | "body" | "small";
type ThemeColor = "primary" | "secondary" | "highlight" | "text";

interface TextProps {
  variant?: TextVariant;
  color?: ThemeColor;
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

export function Text({ variant = "body", color = "text", children, className }: TextProps) {
  return (
    <span style={{ ...styles[variant], color: `var(--${color}-color)` }} className={className}>{children}</span>
  )
}
