import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import GenericTemplate from "components/templates/GenericTemplate";
// import { Link as RouterLink } from "react-router-dom";

export default function Fun() {
  return (
    <WrapperBox>
      <GenericTemplate title="home">
        <div>sdf</div>
      </GenericTemplate>
    </WrapperBox>
  );
}

const WrapperBox = styled(Box)``;
