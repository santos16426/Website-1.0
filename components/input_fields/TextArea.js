import React, { forwardRef } from "react";
import { Input } from "antd";
import styled from "styled-components";
const { TextArea } = Input;
const TextAreaWrapper = styled.div`
	/* border-bottom: 1px solid white; */
	/* padding-top: 25px; */
	/* p {
    font-family: Helvetica;
    font-size: 15px;
    color: #a7a7a7;
    letter-spacing: 0;
    margin: 0px;
  } */

	.custom-placeholder {
		width: 200px;
		padding: 0 8px 0 0;
		pointer-events: none;
		position: absolute;
		left: 0;
		top: 15px;
		transition: 0.2s;
		transition-timing-function: ease;
		transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
		opacity: 0.5;
		font-family: Helvetica;
		font-size: 15px;
		color: #a7a7a7;
		letter-spacing: 0;
	}

	.ant-input:focus {
		-webkit-box-shadow: none;
		box-shadow: none;
		border-color: #03dac6 !important;
	}
	.ant-input:hover {
		border-color: #03dac6 !important;
	}
	textarea {
		background: transparent;
		padding: 15px 10px 15px 5px;
		border-radius: 0;
		color: white;
		-webkit-appearance: none;
		border: none;
		border-bottom: 1px solid gray;
		height: 50px;
		&:not(:placeholder-shown) + .custom-placeholder {
			border-color: #03dac6 !important;
			border-right-width: 1px !important;
			outline: transparent !important;
			color: #03dac6 !important;
		}
	}
	textarea:focus + .custom-placeholder,
	textarea:not(:placeholder-shown) + .custom-placeholder {
		width: 200px;
		transform: scale(0.9) translateY(-11px);
		opacity: 1;
		background: transparent;
		color: #03dac6;
		border-color: white !important;
		border-right-width: 1px !important;
		outline: transparent !important;
		left: -10px;
		top: 0px;
		font-size: 11px !important;
	}
`;

const TextInput = forwardRef((props, ref) => {
	const { placeholder } = props;
	return (
		<TextAreaWrapper>
			<TextArea {...props} className="test" placeholder=" " />
			<p className="custom-placeholder">{placeholder}</p>
		</TextAreaWrapper>
	);
});

export default TextInput;
