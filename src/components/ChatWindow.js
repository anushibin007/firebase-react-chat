import { Button, FormControl } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import firebase from "firebase";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const ChatWindow = () => {
	const [authState] = useContext(AuthContext);

	const [message, setMessage] = useState("");

	const db = firebase.firestore();

	const roomName = "room-public";

	const roomDb = db.collection(roomName);

	const query = roomDb.orderBy("createdAt"); //
	//.limit(25);

	const [messages] = useCollectionData(query, { idField: "id" });

	const messagesWindow = () => {
		if (authState.user) {
			return (
				<React.Fragment>
					<div className="imessage">
						{messages &&
							messages.map((aMessage) => {
								return <ChatMessage key={aMessage.id} message={aMessage} />;
							})}
					</div>
				</React.Fragment>
			);
		}
	};

	const handleMessageChanged = (e) => {
		setMessage(e.target.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();
		setMessage("");
		roomDb.add({
			text: message,
			uid: authState.user.uid,
			photoUrl: authState.user.photoURL,
			displayName: authState.user.displayName,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	const chatInputWindow = () => {
		if (authState.user) {
			return (
				<React.Fragment>
					<form onSubmit={sendMessage}>
						<Row>
							<FormControl value={message} onChange={handleMessageChanged} placeholder="🖊 Enter your message here" />
							<Button type="submit">🚀&nbsp;Send</Button>
						</Row>
					</form>
				</React.Fragment>
			);
		}
	};

	return (
		<Col>
			{messagesWindow()}
			{chatInputWindow()}
		</Col>
	);
};

export default ChatWindow;
