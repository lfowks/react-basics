import { HubConnectionBuilder } from "@microsoft/signalr";

import { useEffect, useState } from "react";

const Home = () => {
  const [connection, setConnection] = useState(null);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:7185/notifications")
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          
          connection.on("MyChannel", (message) => {
           console.log(message);
          });

          connection.on("SendToAll", (message) => {
            console.log(message);
          });
        })
        .catch((error) => console.log(error));

        
    }

   

  }, [connection]);

  const sendMessage = async () => {
    if (connection) await connection.send("SendToAll", inputText);
    //setInputText("");
  };

  return (
    <>
      <input
        value={inputText}
        onChange={(input) => {
          setInputText(input.target.value);
        }}
      />
      <button onClick={sendMessage} type="primary">
        Send
      </button>
    </>
  );
};

export default Home