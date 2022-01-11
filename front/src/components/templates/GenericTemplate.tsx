import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { styled as mstyled } from "@mui/material/styles";
import styled from "styled-components";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export default function Fun(props: IProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <meta name="keywords" content="코딩, html, meta tag" /> */}
      </Head>
      <ComponentWrapper>{props.children && props.children}</ComponentWrapper>
    </>
  );
}

const ComponentWrapper = styled.div``;
