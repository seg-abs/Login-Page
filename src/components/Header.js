import { React } from 'react';
import homeIcon from '../Images/homeIcon.png';

const Header = () =>
	<div className="header">
		<div>
			<img
				className="home"
				src={ homeIcon }
				alt="home icon"
			/></div>
		<div className="text">
			<a href="http://www.google.com">
				<span className="color"> Login/Register</span>
			</a></div>
	</div>;

export default Header;
