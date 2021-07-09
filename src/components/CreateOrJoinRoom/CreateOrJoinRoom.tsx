import React, { FC } from 'react';
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';

const CreateOrJoinRoom: FC = () => {
  return (
    <>
      <h1>Digichips</h1>
      <CreateRoom></CreateRoom>
      <JoinRoom></JoinRoom>
    </>
  );
};

export default CreateOrJoinRoom;
