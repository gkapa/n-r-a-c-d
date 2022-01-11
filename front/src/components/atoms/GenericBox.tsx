import React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

export default function Fun(props: IProps) {
  return <ComponentWrapper>{props.children && props.children}</ComponentWrapper>;
}

const ComponentWrapper = styled.div`
  padding: 8px;
  position: relative;
  display: flex;
`;
