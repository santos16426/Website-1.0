import styled from "styled-components";

export const HoverTextWrapper = styled.div`
	p {
		display: flex;
		flex-direction: row;
		font-family: "Kanit";
		margin: 0;
		color: white;
		&.h1 {
			font-size: 2em;
		}
		&.h2 {
			font-size: 4em;
		}
	}
	.letter {
		min-width: 15px;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-iteration-count: 1;
	}
	.letter:hover {
		color: #08fdd8;
		animation-name: rubberBand;
	}
	@keyframes rubberBand {
		from {
			transform: scale3d(1, 1, 1);
		}

		30% {
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}

	.rubberBand {
		-webkit-animation-name: rubberBand;
		animation-name: rubberBand;
	}
`;
