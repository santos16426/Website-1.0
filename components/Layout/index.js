import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../Theme";
import GlobalStyles from "../Global";
import Sidebar from "../Sidebar";
import { LayoutWrapper, Content } from "./styles";
import Meta from "../Meta";
import { ContainerFluid } from "../Container";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};
const Layout = ({ children, hideOverflow, noscroll, style }) => {
	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<GlobalStyles />
				<ContainerFluid>
					<LayoutWrapper noscroll={noscroll} style={style}>
						<Meta />
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
