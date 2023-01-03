import { React } from 'react';
import CheckBox from './CheckBox';
import ForgotPassword from './ForgotPassword';
import LoginButton from './LoginButton';
import Password from './Password';
import Register from './Register';
import Username from './Username';

const Login = () =>
	<div className="login">
		<div className="title">
			<h1>Login</h1>
		</div>
		<Username/>
		<Password/>
		<LoginButton/>
		<div className="margin box">
			<CheckBox/>
			<ForgotPassword/>
		</div>
		<Register/>
	</div>;

export default Login;
