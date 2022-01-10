import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Link as RouterLink } from "react-router-dom";

export default function Fun() {
  return (
    <WrapperBox>
      <h1>Hello, Wolrd!</h1>
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </WrapperBox>
  );
}

const WrapperBox = styled(Box)``;
