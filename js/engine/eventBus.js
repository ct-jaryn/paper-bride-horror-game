/**
 * 《阴阳簿》事件总线
 * 基于 Huimen.GameEvents 的轻量发布订阅
 */

import { Huimen } from './namespace.js';

export const GameEvents = Huimen.GameEvents;

export function emit(event, data) {
    GameEvents.emit(event, data);
}

export function on(event, callback) {
    GameEvents.on(event, callback);
}

export function off(event, callback) {
    GameEvents.off(event, callback);
}
