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
		<div className="text">Login / Register</div>
	</div>;

export default Header;
