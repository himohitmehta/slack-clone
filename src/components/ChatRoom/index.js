import { useEffect, useState } from "react";
import { FaInfo, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ChatInput from "../ChatInput";
import Message from "../Message.js";
import "./styles.css";

const ChatRoom = () => {
	const { roomId } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);

	useEffect(() => {
		if (roomId) {
			db.collection("channels")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
		}

		db.collection("channels")
			.doc(roomId)
			.collection("messages")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) =>
				setRoomMessages(snapshot.docs.map((doc) => doc.data())),
			);
	}, [roomId]);

	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						<strong># {roomDetails?.name}</strong>
						<FaStar style={{ marginLeft: "10px", fontSize: "18px" }} />
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<FaInfo
							style={{ marginRight: "5px !important", fontSize: "16px" }}
						/>{" "}
						Details
					</p>
				</div>
			</div>

			<div className="chat__messages">
				{roomMessages?.map((item) => (
					<Message
						message={item.message}
						timestamp={item.timestamp}
						user={item.user}
						userImage={item.userImage}
					/>
				))}
			</div>
			<div>
				<ChatInput channelName={roomDetails?.name} channelId={roomId} />
			</div>
		</div>
	);
};

export default ChatRoom;
