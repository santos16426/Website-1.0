import Layout from "../components/Layout";
import HoverText from "../components/HoverText";
import Avatar from "../components/Avatar/";
import { Wrapper } from "./style";
const AboutMe = () => {
	return (
		<Layout>
			<Wrapper bgUrl={"/images/bg2.jpg"}>
				<div className="bg-img"></div>
				<div className="content">
					<HoverText className="h2" string="Hi there!" />
					<Avatar imgUrl={"/images/avatar.png"} />
					<p className="description">
						I am Billy Joe, software engineer from Philippines. I have
						experience with ReactJS, React Naitve, NodeJS, ExpressJS and
						SuiteScript.
						<br />
					</p>
				</div>
			</Wrapper>
		</Layout>
	);
};

export default AboutMe;
