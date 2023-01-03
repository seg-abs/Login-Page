import { React } from 'react';
import CheckBox from './CheckBox';
import LoginButton from './LoginButton';
import Username from './Username';

const Login = () =>
	<div className="login">
		<div className="title">
			<h1>Login</h1>
		</div>
		<Username/>
		<LoginButton/>
		<CheckBox/>
	</div>;

export default Login;
