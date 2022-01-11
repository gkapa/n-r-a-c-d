import React from "react";
import Link from "next/link";
import { styled as mstyled } from "@mui/material/styles";
import styled from "styled-components";

export default function Fun() {
  return (
    <ComponentWrapper>
      <h1>Hello, Wolrd!</h1>
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </ComponentWrapper>
  );
}

const ComponentWrapper = styled.div``;
