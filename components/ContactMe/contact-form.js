import { useState } from "react";
import { Form, Icon, message } from "antd";
import { FormWrapper, InputGroupWrapper } from "./styles";
import TextInput from "../input_fields/TextInput";
import TextArea from "../input_fields/TextArea";
import { SkewedButton } from "../button/";
import HoverText from "../HoverText";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
const { Item } = Form;
let captcha;

const ContactForm = ({ form }) => {
	const [isFormSubmitting, setFormToSubmitting] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	let { getFieldDecorator } = form;
	const handleSubmit = e => {
		e.preventDefault();
		setFormToSubmitting(true);
		form.validateFields(async (err, values) => {
			if (!err) {
				let template_params = {
					name: values.name,
					email: values.email,
					subject: values.subject,
					message: values.message
				};
				let user_id = "user_XnTI7jD0oxjOlZMZCMsid";
				let service_id = "billy_joe_santos";
				let template_id = "contact_form";
				let data = await emailjs.send(
					service_id,
					template_id,
					template_params,
					user_id
				);
				if (data.status === 200) {
					form.resetFields();
					captcha.reset();
					message.success("Sent");
				} else {
					captcha.reset();
					message.warning("Sorry! Try again later");
				}
				setFormToSubmitting(false);
			} else {
				setFormToSubmitting(false);
			}
		});
	};
	const renderButtonMessage = () => {
		if (isFormSubmitting) {
			return "Sending...";
		}

		if (messageSent) {
			return "Message Sent!";
		}

		return "Submit";
	};
	const renderIcon = () => {
		if (isFormSubmitting) {
			return <Icon type="loading" style={{ color: "#ffffff" }} />;
		}

		if (messageSent) {
			return <Icon type="check-circle" style={{ color: "#ffffff" }} />;
		}

		return <img src="/images/paper-plane.svg" alt="paper-plane" />;
	};
	return (
		<FormWrapper>
			<HoverText className="h2" string="Contact Me" />
			<p>
				I am interested in freelance opportunities - especially ambitious or
				large projects. However, if you have other request or question, don't
				hesitate to contact me using below form either.
			</p>
			<Form className="form-group" onSubmit={handleSubmit}>
				<InputGroupWrapper>
					<Item className="custom-field">
						{getFieldDecorator("name", {
							rules: [{ required: true, message: "Name is required" }]
						})(<TextInput placeholder="Name" />)}
					</Item>
					<Item className="custom-field">
						{getFieldDecorator("email", {
							rules: [{ required: true, message: "Email is required" }]
						})(<TextInput placeholder="Email" />)}
					</Item>
				</InputGroupWrapper>
				<Item className="custom-field">
					{getFieldDecorator("subject", {
						// rules: [{ required: true, message: "Email is required" }]
					})(<TextInput placeholder="Subject" />)}
				</Item>
				<Item className="custom-field">
					{getFieldDecorator("message", {
						rules: [{ required: true, message: "Message is required" }]
					})(<TextArea placeholder="Message" />)}
				</Item>

				<InputGroupWrapper>
					<Item className="custom-field with-right-offset">
						{getFieldDecorator("recaptchaToken", {
							rules: [
								{
									required: true,
									message: "Please verify that you are not a robot."
								}
							]
						})(
							<ReCAPTCHA
								className="custom-recaptcha"
								sitekey="6LeH4N4UAAAAAEDy6ulyBxoQRo3amnBB6kk58fNN"
								ref={e => (captcha = e)}
							/>
						)}
					</Item>
					<SkewedButton
						htmlType="submit"
						disabled={isFormSubmitting || messageSent}
						className={messageSent ? "success" : ""}
					>
						<span className="submit-icon">{renderIcon()}</span>
						<span className="submit-message">{renderButtonMessage()}</span>
					</SkewedButton>
				</InputGroupWrapper>
			</Form>
		</FormWrapper>
	);
};
export default Form.create()(ContactForm);
