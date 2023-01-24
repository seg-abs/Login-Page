import { React } from 'react';
import LoginButton from './LoginButton';
import Password from './Password';
import PasswordAssistance from './PasswordAssistance';
import Register from './Register';
import Title from './Title';
import Username from './Username';

const LoginSection = () =>
	<div className="section">
		<div className="LoginSection">
			<Title/>
			<Username/>
			<Password/>
			<LoginButton/>
			<PasswordAssistance/>
			<Register/>
		</div>
	</div>;

export default LoginSection;
