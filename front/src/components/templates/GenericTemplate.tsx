import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IProps {
  title: string;
  children: React.ReactNode;
}

export default function Fun(props: IProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={props.title} />
      </Head>
      <WrapperBox>{props.children}</WrapperBox>
    </>
  );
}

const WrapperBox = styled(Box)``;
