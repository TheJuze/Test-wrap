import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  onClick,
  children,
  className,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={cn(styles.root, className)}>
      {children}
    </button>
  );
};
