import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../State/reducer";
import { useStateValue } from "../../State/stateProvider";
import "./styles.css";

const LogIn = () => {
    const [state, dispatch] = useStateValue()
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user: result.user,
                })
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack logo" />
				<h1>Sign In to Mohit's Slack Clone</h1>
				<p>
					Don't worry it's Safe 😉😎🙈
				</p>
				<Button onClick={signIn}> Sign In with Google</Button>
			</div>
		</div>
	);
};

export default LogIn;
