import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type Peer from 'peerjs';
import type { DataConnection } from 'peerjs';

export const peer: Writable<Peer> = writable();
export const connections: Writable<Array<DataConnection>> = writable([]);
export const players: Writable<Array<{ id: string, nickname: string, score: number }>> = writable([]);