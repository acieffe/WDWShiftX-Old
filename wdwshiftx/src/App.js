import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shift from './components/Shifts';
import Login from './components/Login';
import NewShift from './components/NewShift';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

function App() {
	return (
		<div className="App">
			<Router>
				<Container>
					<Header />
					<Main>
						<Sidebar />
						<Switch>
							<Route path="/shifts">
								<Shift />
							</Route>
							<Route path="/">
								<Login />
							</Route>
							<Route path="/newshift">
								<NewShift />
							</Route>
						</Switch>
					</Main>
				</Container>
			</Router>
		</div>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px auto;
`;

const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;
`;
