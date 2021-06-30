import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<Container>
			<AuthProvider>
				<Login />
				<ToastContainer position="bottom-right" />
			</AuthProvider>
		</Container>
	);
}

export default App;
