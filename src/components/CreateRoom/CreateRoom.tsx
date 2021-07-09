import React, { FC, useState } from 'react';

const CreateRoom: FC = () => {
  const [player, setPlayer] = useState('');
  return (
    <>
      <h2>Create Room</h2>
      <input type="text" placeholder="username" onChange={(e) => setPlayer(e.target.value)} />
      <button
        disabled={!player}
        onClick={() => {
          // socket.emit('create-room', { playerId: playerId, playerUserName: player });
        }}
      >
        create room
      </button>
    </>
  );
};

export default CreateRoom;
