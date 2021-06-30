import { Button, FormControl } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ChatWindow = () => {
	const [authState] = useContext(AuthContext);

	const [message, setMessage] = useState("");

	const handleMessageChanged = (e) => {
		setMessage(e.target.value);
	};

	const sendMessage = () => {
		toast(message);
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

	return <Col>{chatInputWindow()}</Col>;
};

export default ChatWindow;
