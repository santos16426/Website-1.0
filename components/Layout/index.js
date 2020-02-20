import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../Theme";
import GlobalStyles from "../Global";
import Sidebar from "../Sidebar";
import { LayoutWrapper, Content } from "./styles";
import { ContainerFluid } from "../Container";
import Head from "next/head";
const Layout = ({ children, bgURL, hideOverflow, noscroll, style }) => {
	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<GlobalStyles />
				<ContainerFluid>
					<LayoutWrapper bgURL={bgURL} noscroll={noscroll} style={style}>
						<Head>
							<title>Billy Joe Santos | Software Engineer</title>
						</Head>
						<Sidebar />
						<Content hideOverflow={hideOverflow}>{children}</Content>
					</LayoutWrapper>
				</ContainerFluid>
			</React.Fragment>
		</ThemeProvider>
	);
};

export default Layout;
