import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Image } from "react-bootstrap";

const ChatMessage = (props) => {
	const [authState] = useContext(AuthContext);
	const message = props.message;
	const from = message.uid === authState.user.uid ? "from-me" : "from-them";
	const image = <Image roundedCircle className="avatar" src={message.photoUrl} alt={`Profile picture of ${message.displayName}`} title={message.displayName} />;
	return (
		<React.Fragment>
			<p className={`${from} animate__bounceIn animate__animated`} title={message.createdAt.toDate()}>
				{from === "from-them" ? image : ""}&nbsp;
				{message.text}&nbsp;
				{from === "from-me" ? image : ""}
			</p>
		</React.Fragment>
	);
};

export default ChatMessage;
