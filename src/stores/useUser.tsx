import React, { useState, createContext } from 'react';
import { User, CachedUserKey, DefaultUser } from '../models/types';
import { v4 as uuidv4 } from 'uuid';
type Props = {
  children: React.ReactNode;
};
const context = createContext({});
export function UserStoreProvider(p: Props): React.ReactElement {
  const auth = useProvideAuth();
  return <context.Provider value={auth}>{p.children}</context.Provider>;
}

export default function useAuth() {
  return React.useContext(context);
}
function useProvideAuth() {
  const [user, setUser] = useState<User>(() => createOrGetFromCache());

  const setUsername = (username: string) => {
    console.log('setUsername');
    setUser({ userId: user.userId, username: username });
  };
  return { user, setUsername };
}

function createUser(): User {
  console.log('createUser');
  const newUser: User = {
    userId: uuidv4(),
    username: 'guest',
  };
  localStorage.setItem(CachedUserKey, JSON.stringify(newUser));
  return newUser;
}
const createOrGetFromCache = (): User => {
  console.log('createOrGetFromCache');
  try {
    const item = localStorage.getItem(CachedUserKey);
    if (item) return JSON.parse(item);
    return createUser();
  } catch (error) {
    console.error(error);
  }
  return DefaultUser;
};
