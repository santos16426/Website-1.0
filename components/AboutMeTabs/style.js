import styled from "styled-components";

export const TabWrapper = styled.div`
	section {
		padding: 50px;
		display: flex !important;
		flex-direction: column;
		font-size: 0.8em;
	}
	.page {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
		-webkit-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
		-moz-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
		-o-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
		color: #fff;
		overflow: hidden;
	}
	.page {
		position: absolute;
	}

	#p1 {
		left: 0;
	}

	#p2,
	#p3,
	#p4,
	#p5 {
		left: 200%;
	}

	#p1 {
		background: #111111;
	}
	#p2 {
		background: #333333;
	}
	#p3 {
		background: #555555;
	}
	#p4 {
		background: #777777;
	}

	#t2:target #p2,
	#t3:target #p3,
	#t4:target #p4,
	#t5:target #p5 {
		transform: translateX(-190%);
		-webkit-transform: translateX(-190%);
		-moz-transform: translateX(-190%);
		-o-transform: translateX(-190%);
		transition-delay: 0.4s !important;
	}

	#t2:target #p1,
	#t3:target #p1,
	#t4:target #p1,
	#t5:target #p1 {
		background: black;
	}

	#t2:target #p1 .icon,
	#t3:target #p1 .icon,
	#t4:target #p1 .icon,
	#t5:target #p1 .icon {
		filter: blur(3px);
	}

	.icon {
		color: #fff;
		font-size: 2em;
		display: block;
	}

	ul .icon:hover {
		opacity: 0.5;
	}

	.page .icon .title {
		line-height: 2;
	}

	#t2:target ul .icon,
	#t3:target ul .icon,
	#t4:target ul .icon,
	#t5:target ul .icon {
		transform: scale(0.6);
		-webkit-transform: scale(0.6);
		-moz-transform: scale(0.6);
		-o-transform: scale(0.6);
		transition-delay: 0.25s;
	}

	#t2:target #dos,
	#t3:target #tres,
	#t4:target #cuatro,
	#t5:target #cinco {
		transform: scale(0.8) !important;
		-webkit-transform: scale(0.8) !important;
		-moz-transform: scale(0.8) !important;
		-o-transform: scale(0.8) !important;
	}
	ul {
		position: absolute;
		float: right;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		height: 100%;
		width: 10%;
		padding: 0;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
	li {
		display: flex;
		flex-direction: column;

		div {
			font-size: 0.3em !important;
		}
	}

	#menu .icon {
		margin: 30px 0;
		transition: all 0.5s ease-out !important;
		-webkit-transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
	}

	a {
		text-decoration: none;
	}

	.title,
	.hint {
		display: block;
	}

	.title {
		font-size: 38px;
	}

	.hint {
		font-size: 13px;
	}

	#p4 .hint {
		display: inherit !important;
	}

	.hint a {
		color: yellow;
		transition: all 250ms ease-out;
		-webkit-transition: all 250ms ease-out;
		-moz-transition: all 250ms ease-out;
		-o-transition: all 250ms ease-out;
	}

	.hint a:hover {
		color: #fff;
	}

	.line-trough {
		text-decoration: line-through;
	}

	.page#p1 .icon {
		height: 220px;
	}

	.page#p1 .icon {
		transform: translateX(10%) !important;
	}

	#t2:target .page#p2 .icon,
	#t3:target .page#p3 .icon,
	#t4:target .page#p4 .icon,
	#t5:target .page#p5 .icon {
		transform: translateX(0) !important;
		-webkit-transform: translateX(0) !important;
		-moz-transform: translateX(0) !important;
		-o-transform: translateX(0) !important;
		transition-delay: 1s;
	}
`;
export const TableWrapper = styled.div``;
