import { Icon, Menu } from "antd";
import Link from "next/link";
import { Nav } from "./styles";
const links = () => (
	<>
		<Link href="/">
			<a>
				<Nav title="Home">
					<Icon type="home" />
				</Nav>
			</a>
		</Link>
		<Link href="/about">
			<a>
				<Nav title="About Me">
					<Icon type="user" />
				</Nav>
			</a>
		</Link>
		<Link href="/skills">
			<a>
				<Nav title="Skills">
					<Icon type="code" />
				</Nav>
			</a>
		</Link>
		<Link href="/contact-me" prefetch>
			<a>
				<Nav title="Contact Me">
					<Icon type="mail" />
				</Nav>
			</a>
		</Link>
	</>
);

export default links;
