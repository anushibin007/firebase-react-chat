import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Image } from "react-bootstrap";

const ChatMessage = (props) => {
	const [authState] = useContext(AuthContext);
	const message = props.message;
	const from = message.uid === (authState.user ? authState.user.uid : "") ? "from-me" : "from-them";
	const image = <Image roundedCircle className="avatar" src={message.photoUrl} alt={`Profile picture of ${message.displayName}`} title={message.displayName} />;

	const returnMessageItemBasedOnType = () => {
		if (message.messageType && message.messageType === "image") {
			return (
				<React.Fragment>
					<a href={message.attachmentUrl} target="_blank" rel="noopener noreferrer">
						<img className="image-message" src={message.attachmentUrl} alt={`Attachment sent by ${message.displayName}`} />
					</a>
					<br />
					{message.text}
				</React.Fragment>
			);
		} else {
			return message.text;
		}
	};

	return (
		<React.Fragment>
			{message && (
				<p className={`${from} animate__bounceIn animate__animated`} title={message.createdAt && message.createdAt.toDate()}>
					{from === "from-them" ? image : ""}&nbsp;
					{returnMessageItemBasedOnType()}&nbsp;
					{from === "from-me" ? image : ""}
				</p>
			)}
		</React.Fragment>
	);
};

export default ChatMessage;
