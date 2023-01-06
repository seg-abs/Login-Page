import { React } from 'react';
import CheckBox from './CheckBox';
import LoginButton from './LoginButton';
import Password from './Password';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Title from './Title';
import Username from './Username';

const BodySection = () =>
	<div className="section">
		<div className="container"><Title/>
			<Username/>
			<Password/>
			<LoginButton/>
			<div className="margin box">
				<CheckBox/>
				<ResetPassword/>
			</div>
			<Register/>
		</div>
	</div>;

export default BodySection;
