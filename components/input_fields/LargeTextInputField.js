import { Input } from "antd";
import styled from "styled-components";
import React, { forwardRef } from "react";

const { TextArea } = Input;

const LargeTextInputWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	.custom-placeholder {
		padding: 0 8px 0 0;
		pointer-events: none;
		position: absolute;
		left: 0;
		top: 0;
		transition: 0.2s;
		transition-timing-function: ease;
		transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
		opacity: 0.5;
	}
	.ant-input:focus {
		box-shadow: none !important;
		-webkit-box-shadow: none !important;
		border-color: #48b1bf !important;
	}
	textarea {
		font-size: 16px !important;
		border: none;
		padding: 10px 8px 10px 8px;
		border-bottom: 1px solid;
		border-radius: 0;
		&:focus + .custom-placeholder,
		&:not(:placeholder-shown) + .custom-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			transform: scale(0.85) translateY(-11px);
			opacity: 1;
			background: #fff;
			color: #0073af;
			height: 20px;
			border-color: #48b1bf !important;
			border-right-width: 1px !important;
			outline: transparent !important;
		}

		&:not(:focus) + .custom-placeholder {
			color: #a8a8a8;
		}

		/* For IE Browsers*/

		&:focus + .custom-placeholder,
		&:not(:ms-input-placeholder) + .custom-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			transform: scale(0.85) translateY(-11px);
			opacity: 1;
			background: #fff;
			color: #0073af;
			height: 20px;
			border-color: #48b1bf;
			outline: transparent !important;
			box-shadow: none !important;
			-webkit-box-shadow: none !important;
		}
	}
`;

const LargeTextInputField = forwardRef((props, ref) => {
	const { placeholder, className } = props;
	return (
		<LargeTextInputWrapper className={className}>
			<TextArea {...props} placeholder=" " />
			<span className="custom-placeholder">{placeholder}</span>
		</LargeTextInputWrapper>
	);
});

export default LargeTextInputField;
