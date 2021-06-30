import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Image } from "react-bootstrap";

const ChatMessage = (props) => {
	const [authState] = useContext(AuthContext);
	const message = props.message;
	const from = message.uid === authState.user.uid ? "from-me" : "from-them";
	return (
		<React.Fragment>
			<p className={from}>
				{from === "from-them" ? <Image roundedCircle className="avatar" src={message.photoUrl} /> : ""}&nbsp;
				{message.text}&nbsp;
				{from === "from-me" ? <Image roundedCircle className="avatar" src={message.photoUrl} /> : ""}
			</p>
		</React.Fragment>
	);
};

export default ChatMessage;
