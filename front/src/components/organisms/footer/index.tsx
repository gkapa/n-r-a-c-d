import React from "react";
import Link from "next/link";
import { styled as mstyled } from "@mui/material/styles";
import styled from "styled-components";

export default function Fun() {
  return (
    <ComponentWrapper>
      <div className="footer__copyright">YVcontainer</div>
    </ComponentWrapper>
  );
}

const ComponentWrapper = styled.div`
  padding: 24px 0;
  height: 100px;
  color: white;
  background: #0f151b;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
