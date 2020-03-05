import React, { forwardRef } from "react";
import { Input } from "antd";
import styled from "styled-components";

const TextInputWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	.ant-input {
		background-color: transparent !important;
		color: white;
		.has-error {
			background: transparent !important;
		}
	}
	.ant-input[disabled] {
		background: transparent;
		border-bottom: 1px solid black;
		color: rgba(0, 0, 0, 0.65);
	}
	.custom-placeholder {
		color: white;
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
		border-color: #03dac6 !important;
	}
	.ant-input:hover {
		border-color: #03dac6 !important;
	}
	input {
		-webkit-appearance: none;
		padding: 15px 10px 15px 5px;
		border-radius: 0;
		border: none;
		border-bottom: 1px solid gray;
		height: 50px;
		&:focus + .custom-placeholder,
		&:not(:placeholder-shown) + .custom-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			transform: scale(0.9) translateY(-11px);
			opacity: 1;
			background: transparent;
			color: #03dac6;
			height: 20px;
			border-color: #03dac6 !important;
			border-right-width: 1px !important;
			outline: transparent !important;
		}
		/* For IE Browsers*/

		&:focus + .custom-placeholder,
		&:not(:ms-input-placeholder) + .custom-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			transform: scale(0.9) translateY(-11px);
			opacity: 1;
			background: transparent;
			color: #03dac6;
			height: 20px;
			border-color: #03dac6;
			outline: transparent !important;
			box-shadow: none !important;
			-webkit-box-shadow: none !important;
		}

		&:not(:placeholder-shown) + .custom-placeholder {
			color: #a8a8a8;
		}
	}
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const TextInput = forwardRef((props, ref) => {
	const { placeholder, className, currency, onKeyUp } = props;
	return (
		<TextInputWrapper className={className}>
			{currency && <span>{currency}</span>}
			<Input
				{...props}
				placeholder={currency ? "0.00" : " "}
				onKeyUp={onKeyUp}
			/>
			<span className="custom-placeholder">{placeholder}</span>
		</TextInputWrapper>
	);
});

export default TextInput;
