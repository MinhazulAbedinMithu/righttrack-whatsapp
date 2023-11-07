import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import conversations from "./utils/conversations";
import ChatScreen from "./components/ChatScreen/ChatScreen";

function App() {
  const [conversationData, setConversationData] = useState([...conversations]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  return (
    <div className="root-wrapper">
      <div className="left-sidebar">
        <Sidebar
          conversationData={conversationData}
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
        />
      </div>
      <div className="right-screen">
        {selectedPerson ? (
          <ChatScreen
            conversationData={conversationData}
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        ) : (
          <div>
            <h2>Welcome</h2>
            <p>lorem5</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
