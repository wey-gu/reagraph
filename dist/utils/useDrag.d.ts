import { Vector3 } from 'three';
import { InternalGraphPosition } from '../types';
interface DragParams {
    draggable: boolean;
    position: InternalGraphPosition;
    set: (position: Vector3) => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}
export declare const useDrag: ({ draggable, set, position, onDragStart, onDragEnd }: DragParams) => (...args: any[]) => import("@use-gesture/react/dist/declarations/src/types").ReactDOMAttributes;
export {};
