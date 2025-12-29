import { create } from 'zustand';

interface Connection {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline';
  lastSeen: number;
}

interface ConnectionsState {
  connections: Connection[];
  addConnection: (connection: Connection) => void;
  removeConnection: (id: string) => void;
}

export const useConnectionsStore = create<ConnectionsState>((set) => ({
  connections: [
     { id: '1', name: 'Sarah', status: 'online', lastSeen: Date.now() },
     { id: '2', name: 'Mike', status: 'offline', lastSeen: Date.now() - 3600000 },
  ],
  addConnection: (connection) => set((state) => ({ connections: [...state.connections, connection] })),
  removeConnection: (id) => set((state) => ({ connections: state.connections.filter(c => c.id !== id) })),
}));
