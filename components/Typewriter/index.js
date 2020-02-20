import React from "react";
import Typewriter from "typewriter-effect";
import { TypeWriterWrapper } from "./styles";
const BannerString = () => (
	<TypeWriterWrapper>
		<Typewriter
			options={{
				strings: ["Hi!", "I am Billy Joe", "Software Engineer"],
				autoStart: true,
				loop: true
			}}
		/>
	</TypeWriterWrapper>
);
export default BannerString;
