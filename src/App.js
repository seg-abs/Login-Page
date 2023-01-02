import { React } from 'react';
import './App.scss';
import Heading from './components/Heading';
import Login from './components/Login';
import Username from './components/Username';

const App = () =>
	<div className="App">
		<Heading/>
		<Login/>
		<Username/>
	</div>;

export default App;
