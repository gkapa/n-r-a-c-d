import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "consts/globalContst";
import TextButton from "components/atoms/TextButton";
import IconButton from "components/atoms/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideAnchor from "./SideAnchor";
import { SidebarContext } from "./context";

export default function Fun() {
  const [isSidebarOn, setIsSidebarOn] = React.useState(false);

  return (
    <>
      <SidebarContext.Provider value={{ isSidebarOn, setIsSidebarOn }}>
        <SideAnchor />
      </SidebarContext.Provider>
      <Appbar>
        <Toolbar>
          <div className="toolbar__left">
            <div className="toolbar__logo">
              <Link href="/">
                <a>
                  <img src="/logo/logo_banner.png" style={{ maxWidth: "120px;" }} />
                </a>
              </Link>
            </div>
          </div>
          <div className="toolbar__right">
            <div className="toolbar__links">
              <Link href="/">
                <TextButton href="/">Home</TextButton>
              </Link>
            </div>
            <div className="toolbar__anchorButton">
              <IconButton onClick={() => setIsSidebarOn(true)}>
                <MenuIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </Appbar>
    </>
  );
}

const Appbar = styled.div`
  position: relative;
  background: #273952;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  align-items: center;
`;

const Toolbar = styled.div`
  margin: 0 auto;
  max-width: ${theme.layout.navbar.maxWidthPx}px;
  padding: 2px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .toolbar__left,
  .toolbar__right {
    display: flex;
    align-items: center;
  }
`;
