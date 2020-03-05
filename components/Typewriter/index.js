import React from "react";
import Typewriter from "typewriter-effect";
import { TypeWriterWrapper } from "./styles";
const BannerString = ({ strings }) => (
	<TypeWriterWrapper>
		<Typewriter
			options={{
				strings,
				autoStart: true,
				loop: true
			}}
		/>
	</TypeWriterWrapper>
);
export default BannerString;
