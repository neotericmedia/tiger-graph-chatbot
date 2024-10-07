import './App.css'
// import { useEffect, useState } from 'react';
import React, { useState, useCallback, useEffect } from 'react';
import { Login } from './components/Login';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WS_URL = 'ws://0.0.0.0:8000/ui/Demo_Graph1/chat';

function App() {
  const [socketUrl, setSocketUrl] = useState(WS_URL);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const queryCopilotWs = useCallback((msg:string) => sendMessage(msg));


  useWebSocket(WS_URL, {
    onOpen: () => {
      queryCopilotWs('dXNlcl8yOlRoaXNpc3RoZWFkbWluITE=')
      console.log('WebSocket connection established.');
    }
  });


  return (
    <>
      <div className="h-[100vh] grid place-items-center">
        <div className="w-full max-w-80">
          <Login />
        </div>
      </div>
    </>
  )
}

export default App
