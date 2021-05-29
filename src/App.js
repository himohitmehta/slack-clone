import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import { useStateValue } from "./State/stateProvider";

function App() {
	const [{user}, dispatch] = useStateValue();


	return (
		//BEM naming convention for css styling
		<div className="app">
			<Router>
				{!user ? (
					<LogIn />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />

							<Switch>
								<Route path="/room/:roomId">
									<ChatRoom />
								</Route>
								<Route path="/">
									<h1>Welcome</h1>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
