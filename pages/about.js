import Layout from "../components/Layout";
import HoverText from "../components/HoverText";
import Avatar from "../components/Avatar/";
import Tabs from "../components/AboutMeTabs";
import { Wrapper } from "../components/style";
const AboutMe = () => {
	return (
		<Layout>
			<Wrapper bgUrl={"/images/bg2.jpg"}>
				<div className="bg-img"></div>
				<div className="content">
					<div className="left-side">
						<HoverText className="h2" string="Hi there!" />
						<Avatar imgUrl={"/images/avatar.png"} />
						<p className="description">
							I am Billy Joe, software engineer from Philippines. I have
							experience with ReactJS, React Naitve, NodeJS, ExpressJS and
							SuiteScript. Worked in a team with emphasis on Agile Methodologies
							<br />
						</p>
					</div>
					<div className="right-side">
						<Tabs />
					</div>
				</div>
			</Wrapper>
		</Layout>
	);
};

export default AboutMe;
