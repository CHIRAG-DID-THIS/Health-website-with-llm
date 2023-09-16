import WhatsApp from "./pages/WhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import LoginScreen from "./loginScreen";

function App() {
  const [user] = useAuthState(auth);
  return (
      < div >
        {!user ? <LoginScreen /> : <WhatsApp />}
      </div>
  );
}

export default App;
