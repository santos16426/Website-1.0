import styled from "styled-components";
import { Button } from "antd";

export const HoverBtnWrapper = styled.div`
	.buttonBox {
		position: relative;
		float: left;
		width: 150px;
		cursor: pointer;
	}

	button {
		width: 100%;
		height: 40px;
		position: relative;
		background: rgba(255, 255, 255, 0.27);
		text-transform: uppercase;
		color: white;
		font-weight: 700;
		letter-spacing: 1px;
		border: none;
		font-size: 15px;
		outline: none;
		font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
	}
	.border {
		position: absolute;
		background: none;
		transition: all 0.3s ease-in-out;
	}

	#first > .border:nth-of-type(1) {
		top: 0;
		left: 0;
		border-left: 1px solid white;
		border-top: 1px solid white;
		width: 30px;
		height: 30px;
	}

	#first > .border:nth-of-type(2) {
		bottom: 0;
		right: 0;
		border-right: 1px solid white;
		border-bottom: 1px solid white;
		width: 30px;
		height: 30px;
	}

	#first:hover .border {
		width: 102%;
		height: 105%;
	}
`;

export const HoverBtn = props => (
	<HoverBtnWrapper>
		<div id="first" class="buttonBox">
			<button>{props.children}</button>
			<div class="border"></div>
			<div class="border"></div>
		</div>
	</HoverBtnWrapper>
);

export const SkewedButton = styled(Button)`
	&.ant-btn {
		min-width: 140px;
		height: 40px;
		border-radius: 0;
		border-top-left-radius: 18px;
		border-top-right-radius: 5px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 18px;
		background: rgba(255, 255, 255, 0.27);
		box-shadow: 0 1px 4px 0 rgba(47, 114, 169, 0.5);
		outline: none;

		.submit-icon {
			margin-right: 8px;
		}
		.submit-message,
		span {
			color: #fff;
		}
		&:hover,
		&:focus {
			background-color: rgba(255, 255, 255, 0.27);
		}
		&[disabled] {
			background: rgba(255, 255, 255, 0.27);
			&:hover,
			&:focus {
				background: rgba(255, 255, 255, 0.27);
			}
		}

		&.success {
			color: #fff;
			background: #6cc070;

			&:hover,
			&:focus {
				background: #6cc070;
			}
		}
	}
`;
