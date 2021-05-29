import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
	FaBook,
	FaChevronDown,
	FaChevronUp,
	FaComment,
	FaFile,
	FaGamepad,
	FaPaintBrush,
	FaPaperclip,
	FaPencilAlt,
	FaPlus,
	FaUser,
	FaUserFriends,
} from "react-icons/fa";
import { db } from "../../firebase";
import { useStateValue } from "../../State/stateProvider";
import SidebarOptions from "../SidebarOptions";
import "./styles.css";

const Sidebar = () => {
	const [channels, setChannels] = useState([]);

	const [{ user }] = useStateValue();
	useEffect(() => {
		//Run this code once
		db?.collection("channels").onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				})),
			),
		);
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2> Mohit Slack Workspace</h2>
					<h3>
						<FaGamepad
							style={{
								fontSize: "14px",
								marginTop: "1px",
								marginRight: "2px",
								color: "green",
							}}
						/>
						{user?.displayName}
					</h3>
				</div>

				<FaPencilAlt
					style={{
						color: "#49274b",
						fontSize: "18px",
						padding: "8px",
						backgroundColor: "white",
						borderRadius: "50%",
					}}
				/>
			</div>

			<SidebarOptions Icon={FaComment} title="Threads" />
			<SidebarOptions Icon={FaUser} title="Mentions & reactions" />
			<SidebarOptions Icon={FaPaintBrush} title="Saved items" />
			<SidebarOptions Icon={FaBook} title="Channel Browser" />
			<SidebarOptions Icon={FaUserFriends} title="People & User Groups" />
			<SidebarOptions Icon={FaPaperclip} title="Apps" />
			<SidebarOptions Icon={FaFile} title="File browser" />

			<SidebarOptions Icon={FaChevronUp} title="Show less" />
			<hr />
			<SidebarOptions Icon={FaChevronDown} title="Channels" />
			<hr />
			<SidebarOptions Icon={FaPlus} addChannelOption title="Add Channel" />

			{channels.map((channel) => (
				<SidebarOptions key={channel.id} title={channel.name} id={channel.id} />
			))}
			{/* 
            Connect the db and list the channels
            <SidebarOptions ....... />
            */}
		</div>
	);
};
export default Sidebar;
