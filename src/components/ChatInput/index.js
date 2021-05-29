import { Button } from "@material-ui/core";
import { useState } from "react";
import { db } from "../../firebase";
import "./styles.css";
import firebase from "firebase";
import { useStateValue } from "../../State/stateProvider";

const ChatInput = ({ channelName, channelId }) => {
	const [input, setInput] = useState("");
	const [{ user }] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelId) {
			db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userImage: user.photoURL,
			});
		}
        setInput('')
	};

	return (
		<div className="chatInput">
			<form>
				<input
					placeholder={`Message ${channelName?.toLowerCase()}`}
					value={input}
					onChange={(e) => setInput(e.target.value)}

				/>
				<Button type="submit" onClick={sendMessage}>
					Send
				</Button>
			</form>
		</div>
	);
};

export default ChatInput;
