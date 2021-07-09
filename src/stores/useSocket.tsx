import React, { createContext, useMemo } from 'react';
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
type Props = {
  children: React.ReactNode;
};
type ContextType = Socket<DefaultEventsMap, DefaultEventsMap> | null;
const context = createContext<ContextType>(null);
const BACKEND_URL = 'http://localhost:4000';
export function SocketStoreProvider({ children }: Props): React.ReactElement {
  const contextValue = useMemo(() => io(BACKEND_URL), [BACKEND_URL]);
  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default function useSocket() {
  return React.useContext(context);
}
