import WhatsApp from "./pages/WhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import LoginScreen from "./loginScreen";
import NoteState from "./components/NoteState";
import { MessageContext  } from "./components/MessageContext";

function App() {
  const [user] = useAuthState(auth);
  return (
    // <NoteState>
    // <MessageContext>
      < div >
        {!user ? <LoginScreen /> : <WhatsApp />}
      </div>
      // {/* </MessageContext>
      // </NoteState> */}
  );
}

export default App;
