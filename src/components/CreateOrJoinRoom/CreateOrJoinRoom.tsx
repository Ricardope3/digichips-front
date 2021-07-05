import React, { FC } from 'react';
import { useRouter } from 'hooks/use-router';

const CreateOrJoinRoom: FC = () => {
  const { history } = useRouter();
  return (
    <>
      <h2>Digichips</h2>
      <button onClick={() => history.push('/create')}>Create Room</button>
      <button onClick={() => history.push('/join')}>Join Room</button>
    </>
  );
};

export default CreateOrJoinRoom;
