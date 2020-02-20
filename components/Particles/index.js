import React from "react";
import { ParticlesWrapper } from "./styles";
import Particles from "react-particles-js";
import config from "./config";
const Particle = ({ children }) => (
	<ParticlesWrapper>
		<Particles width={"100%"} height={"100vh"} params={config} />
	</ParticlesWrapper>
);

export default Particle;
