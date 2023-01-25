import { React } from 'react';
import homeIcon from '../Images/homeIcon.png';

const Header = () =>
	<div className="header">
		<div className="homeIcon">
			<img
				className="home"
				src={ homeIcon }
				alt="home icon"
			/>
		</div>
		<div className="text">
			<a className="color" href="http://www.google.com">
				Login/Register
			</a></div>
	</div>;

export default Header;
