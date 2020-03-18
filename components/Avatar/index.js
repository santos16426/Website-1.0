import { AvatarWrapper } from "./style";
const Avatar = ({ imgUrl }) => (
	<AvatarWrapper>
		<a href="#">
			<img src={imgUrl} alt="avatar" />
		</a>
	</AvatarWrapper>
);
export default Avatar;
