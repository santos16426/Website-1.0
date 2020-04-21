import styled from "styled-components";

export const SkillWrapper = styled.div`
	margin-top: 10px;

	.skill-lockup {
		max-width: 450px;
		width: 100%;
		float: left;
		margin-right: 40px;
	}

	.skill-info {
		display: block;
		margin-bottom: 20px;
	}

	.skill-name {
		float: left;
		color: white;
		font-size: 0.5em;
	}

	.skill-bar {
		display: block;
		max-width: 450px;
		width: 100%;
		height: 10px;
		background: #e3e3e5;
		clear: both;
		border-radius: 10px;
		margin: 20px 0;
	}

	.skill-level {
		display: table;
		height: 10px;
		background: red;
		border-radius: 10px;
	}
	.skill-percentage {
		width: ${props => props.percentage};
		-webkit-animation: progress 2s linear;
		animation: progress 2s linear;
	}
	@keyframes progress {
		from {
			width: 0%;
		}
		to {
			width: ${props => props.percentage};
		}
	}
`;
