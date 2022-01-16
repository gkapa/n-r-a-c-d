import React from "react";
import { Button, SxProps } from "@mui/material";
import { styled as mstyled } from "@mui/material/styles";

interface IProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "contained" | "text" | "outlined";
  sx?: SxProps;
  style?: React.CSSProperties;
  href?: string;
}

const SButton = mstyled(Button)`
  color: inherit;
`;

export default function Fun(props: IProps) {
  return (
    <SButton
      variant={"text" || props.variant}
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      size="medium"
      sx={props.sx}
      style={props.style}
      href={props.href}
    >
      {props.children}
    </SButton>
  );
}
