import { Button, FormControl } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import firebase from "firebase";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

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
					{messages &&
						messages.map((aMessage) => {
							return <Row key={aMessage.id}>{aMessage.text}</Row>;
						})}
				</React.Fragment>
			);
		}
	};

	const handleMessageChanged = (e) => {
		setMessage(e.target.value);
	};

	const sendMessage = () => {
		toast(message);
		setMessage("");
		roomDb.add({
			text: message,
			uid: authState.user.uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	const chatInputWindow = () => {
		if (authState.user) {
			return (
				<React.Fragment>
					<Row>
						<FormControl as="textarea" value={message} onChange={handleMessageChanged} />
						<Button onClick={sendMessage}>🚀&nbsp;Send</Button>
					</Row>
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
