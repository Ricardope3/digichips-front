import React, { FC } from 'react';

const Room: FC = () => {
  return (
    <>
      <h1>Room</h1>
      <button
        onClick={() => {
          // socket.emit('engage-room', { roomPin: roomPin, playerId: playerId, playerUserName: player });
        }}
      >
        say hello
      </button>
    </>
  );
};

export default Room;
