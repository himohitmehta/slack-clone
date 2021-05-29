import { useHistory } from "react-router";
import { db } from "../../firebase";
import "./styles.css";

const SidebarOptions = ({ Icon, title, id, addChannelOption }) => {
	const history = useHistory();

	const selectChannel = () => {
		if (id) {
			history.push(`/room/${id}`);
		} else {
			history.push(title);
		}
	};
	const addChannel = () => {
		const channelName = prompt("Please enter the channel name");

		if (channelName) {
			db.collection("channels").add({
				name: channelName,
			});
		}
	};
	return (
		<div
			className="sidebarOptions"
			onClick={addChannelOption ? addChannel : selectChannel}
		>
			{Icon && <Icon className="sidebarOptions__icon" />}

			{Icon ? (
				<h2>{title}</h2>
			) : (
				<h3 className="sidebarOptions__channel">
					<span className="sidebarOptions__hash">#</span> {title}
				</h3>
			)}
		</div>
	);
};

export default SidebarOptions;
