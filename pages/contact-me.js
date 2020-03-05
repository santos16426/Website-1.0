import Layout from "../components/Layout/";
import { ContactWrapper } from "../components/ContactMe/styles";
import ContactForm from "../components/ContactMe/contact-form";

const Contact = () => (
	<Layout>
		<ContactWrapper bgUrl={"/images/darkbg.jpg"}>
			<ContactForm />
		</ContactWrapper>
	</Layout>
);

export default Contact;
