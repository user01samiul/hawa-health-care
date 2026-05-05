import type { ReactNode, ElementType } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)] ${className}`}
    >
      {children}
    </Tag>
  );
}
