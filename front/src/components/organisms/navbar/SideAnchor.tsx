import React from "react";
import Link from "next/link";
import { styled as mstyled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import styled from "styled-components";
import { SidebarContext } from "./context";

export default function Fun() {
  const { isSidebarOn, setIsSidebarOn } = React.useContext(SidebarContext);

  return (
    <Drawer
      anchor={"right"}
      open={isSidebarOn}
      onClose={() => {
        setIsSidebarOn(false);
      }}
    >
      <ComponentWrapper>
        <Toolbar>sdfsdfsdfsdfsdfsdfsd</Toolbar>
      </ComponentWrapper>
    </Drawer>
  );
}

const ComponentWrapper = styled.div`
  height: 100vh;
  position: relative;
  background: #273952;
  color: white;
`;

const Toolbar = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-flow: column nowrap;
`;
