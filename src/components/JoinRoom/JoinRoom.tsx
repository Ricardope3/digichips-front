import React, { FC, useState } from 'react';
// import useSocket from 'stores/useSocket';

import useAuth from 'stores/useUser';
const JoinRoom: FC = () => {
  const [roomPin, setRoomPin] = useState(0);
  const [player, setPlayer] = useState('');
  // const [player, setPlayer] = useState('');
  // const [playerId, setPlayerId] = useState('');
  // const socket = useSocket();
  // console.log(socket);
  const auth = useAuth();
  console.log(auth);
  return (
    <>
      <h2>Join Room</h2>
      <input
        type="number"
        placeholder="pin"
        onChange={(e) => {
          setRoomPin(Number(e.target.value));
        }}
      />
      <input type="text" placeholder="username" onChange={(e) => setPlayer(e.target.value)} />

      <button
        disabled={!roomPin || !player}
        onClick={() => {
          // socket.emit('join-room', { roomPin: roomPin, playerId: playerId, player, playerUserName: player });
        }}
      >
        join room
      </button>
    </>
  );
};

export default JoinRoom;
