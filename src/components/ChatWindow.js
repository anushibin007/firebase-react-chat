import { Button, FormControl, Alert, ProgressBar } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { toast } from "react-toastify";
import FileUploader from "react-firebase-file-uploader";

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
	};

	const handleMessageChanged = (e) => {
		setMessage(e.target.value);
	};

	const sendTextMessage = (e) => {
		e.preventDefault();
		if (message && message.trim()) {
			setMessage("");
			roomDb
				.add({
					text: message,
					uid: authState.user.uid,
					photoUrl: authState.user.photoURL,
					displayName: authState.user.displayName,
					messageType: "text",
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
					<form onSubmit={sendTextMessage}>
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
		} else
			return (
				<div className="wrapper">
					<Alert variant="danger">Please login to send a message</Alert>
				</div>
			);
	};

	const invokeFileUpload = (e) => {
		e.preventDefault();
		document.getElementById("fileUpload").click();
	};

	const renderFileUploadButton = () => {
		return (
			<div className="wrapper">
				<FileUploader hidden accept="image/*" id="fileUpload" randomizeFilename storageRef={firebase.storage().ref("images")} onUploadError={handleUploadError} onUploadSuccess={handleUploadSuccess} onProgress={handleProgress} />
				{authState.user && progress === 0 ? (
					<Button variant="primary" onClick={invokeFileUpload}>
						📸&nbsp;Upload an image
					</Button>
				) : (
					""
				)}
			</div>
		);
	};

	const handleUploadError = (error) => {
		toast.error("💔 Oops. Error: " + error);
		setProgress(0);
	};

	const handleUploadSuccess = (filename) => {
		firebase
			.storage()
			.ref("images")
			.child(filename)
			.getDownloadURL()
			.then((url) => {
				roomDb
					.add({
						text: message,
						uid: authState.user.uid,
						photoUrl: authState.user.photoURL,
						displayName: authState.user.displayName,
						messageType: "image",
						attachmentUrl: url,
						createdAt: firebase.firestore.FieldValue.serverTimestamp(),
					})
					.then(() => {
						setMessage("");
					})
					.catch((err) => {
						toast.error("💔 Oops. Error: " + err);
					});
				setProgress(0);
			});
	};

	const [progress, setProgress] = useState(0);

	const handleProgress = (progress) => setProgress(progress);

	const renderProgressBar = () => {
		if (progress > 0) {
			return (
				<div className="wrapper">
					<ProgressBar now={progress} animated />
				</div>
			);
		}
	};

	useEffect(() => {
		const endOfPage = document.getElementById("endOfPage");
		if (endOfPage) endOfPage.scrollIntoView();
	}, [messages, authState.user]);

	return (
		<React.Fragment>
			{messagesWindow()}
			{chatInputWindow()}
			{renderFileUploadButton()}
			{renderProgressBar()}
		</React.Fragment>
	);
};

export default ChatWindow;
