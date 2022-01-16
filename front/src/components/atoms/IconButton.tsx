import React from "react";
import { IconButton, SxProps } from "@mui/material";
import { styled as mstyled } from "@mui/material/styles";

interface IProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
  style?: React.CSSProperties;
}

const SButton = mstyled(IconButton)`
  color: inherit;
`;

export default function Fun(props: IProps) {
  return (
    <SButton
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      size="medium"
      sx={props.sx}
      style={props.style}
    >
      {props.children}
    </SButton>
  );
}
