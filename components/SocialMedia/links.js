import { Icon, Menu } from "antd";
import Link from "next/link";
import { Nav } from "./styles";
const links = () => (
	<>
		<a href="https://www.facebook.com/joelucas.santos" target="_blank">
			<Nav title="Facebook">
				<Icon type="facebook" theme="filled" />
			</Nav>
		</a>

		<a href="https://www.instagram.com/________________joe" target="_blank">
			<Nav title="Instagram">
				<Icon type="instagram" theme="filled" />
			</Nav>
		</a>

		<a href="https://github.com/santos16426" target="_blank">
			<Nav title="Github">
				<Icon type="github" />
			</Nav>
		</a>

		<a href="https://www.linkedin.com/in/billy-santos" target="_blank">
			<Nav title="LinkedIn">
				<Icon type="linkedin" theme="filled" />
			</Nav>
		</a>
	</>
);

export default links;
