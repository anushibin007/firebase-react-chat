import { Button, FormControl } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { toast } from "react-toastify";

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
						<div id="endOfPage" />
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
		if (message && message.trim()) {
			setMessage("");
			roomDb
				.add({
					text: message,
					uid: authState.user.uid,
					photoUrl: authState.user.photoURL,
					displayName: authState.user.displayName,
					createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.catch((err) => {
					toast.error("💔 Oops. Error: " + err);
				});
		} else {
			toast.error("💔 Please enter some message");
		}
	};

	const chatInputWindow = () => {
		if (authState.user) {
			return (
				<React.Fragment>
					<form onSubmit={sendMessage}>
						<div className="wrapper">
							<FormControl value={message} onChange={handleMessageChanged} placeholder="🖊 Enter your message here" required autoFocus />
						</div>
						<div className="wrapper">
							<Button type="submit" variant="success">
								🚀&nbsp;Send
							</Button>
						</div>
					</form>
				</React.Fragment>
			);
		}
	};

	useEffect(() => {
		const endOfPage = document.getElementById("endOfPage");
		if (endOfPage) endOfPage.scrollIntoView();
	}, [messages]);

	return (
		<React.Fragment>
			{messagesWindow()}
			{chatInputWindow()}
		</React.Fragment>
	);
};

export default ChatWindow;
