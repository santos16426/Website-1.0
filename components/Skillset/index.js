import { SkillWrapper } from "./style";
const Skillset = ({ skill, percentage }) => (
	<SkillWrapper percentage={percentage} className="skillset">
		<div className="skill-lockup">
			<span className="skill-name">{skill}</span>
			<span className="skill-bar">
				<span className="skill-level skill-percentage"></span>
			</span>
		</div>
	</SkillWrapper>
);

export default Skillset;
