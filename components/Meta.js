import Head from "next/head";
import emailjs from "emailjs-com";

const Meta = () => (
	<Head>
		<meta name="theme-color" content="#ffffff" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			href="https://fonts.googleapis.com/css?family=Kanit:600&display=swap&subset=latin-ext,vietnamese"
			rel="stylesheet"
		/>

		<link rel="stylesheet" href="/styles/_antd.css" />
		<link rel="stylesheet" type="text/css" href="/styles/_nprogress.css" />
		<script
			type="text/javascript"
			src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
		></script>
		<script type="text/javascript">
			{function() {
				emailjs.init("user_XnTI7jD0oxjOlZMZCMsid");
			}}
		</script>
	</Head>
);

export default Meta;
