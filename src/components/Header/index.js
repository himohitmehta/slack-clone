import "./styles.css";
import { Avatar } from "@material-ui/core";
import {FaClock, FaHeadphones, FaRegClock, FaSearch, FaUser} from "react-icons/fa"
import { useStateValue } from "../../State/stateProvider";
const Header = () => {
	const [{user}] = useStateValue()
	return (
		<div className="header">
			<div className="header__left">
				{/* Avatar for logged in user */}
				<Avatar
                src={user?.photoUrl}
				alt={user.displayName}
                />
				{/* Time Section */}
                <FaRegClock style={{marginLeft:'auto', marginRight:'30px'}}/>
			</div>
			<div className="header__search">
				{/* Search Icon */}
                <FaSearch />
				{/* Input */}
                <input className="header__searchInput"
                placeholder="search here" />
			</div>
			<div className="header__right">{/* Help Icon */}
            
            <FaHeadphones
            style={{marginLeft:'auto',marginRight:'20px'}}
            /> </div>
		</div>
	);
};

export default Header;
