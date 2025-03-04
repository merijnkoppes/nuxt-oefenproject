declare module "vue-drag-resize" {
  import { DefineComponent } from "vue";

  const VueDragResize: DefineComponent<{
    w: number;
    h: number;
    x: number;
    y: number;
    minw?: number;
    minh?: number;
    active?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    parentLimitation?: boolean;
    snapToGrid?: [number, number];
    grid?: [number, number];
    onDrag?: (x: number, y: number) => void;
    onResize?: (x: number, y: number, width: number, height: number) => void;
  }>;

  export default VueDragResize;
}
