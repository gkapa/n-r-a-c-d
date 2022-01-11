import React from "react";
import Link from "next/link";
// import { Box } from "@mui/material";
import { styled as mstyled } from "@mui/material/styles";
import styled from "styled-components";
import { theme } from "consts/globalContst";

interface ISidebarContext {
  isSidebarOn: boolean;
  setIsSidebarOn: any;
}

export const SidebarContext = React.createContext<ISidebarContext>({
  isSidebarOn: false,
  setIsSidebarOn: () => {}
});

export default function Fun() {
  const [isSidebarOn, setIsSidebarOn] = React.useState(false);

  return (
    <>
      <Appbar>
        <Toolbar>
          <div className="toolbar__left"></div>
          <div className="toolbar__right"></div>
        </Toolbar>
      </Appbar>
    </>
  );
}

const ComponentWrapper = styled.div``;

const Appbar = styled.div`
  position: relative;
  background-color: #273952;
  align-items: center;
`;

const Toolbar = styled.div`
  color: white;
`;
