/*定义基础组件的位置类型*/
export interface Position {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string
}
/*  定义基础组件的位置上层定义*/
export interface Iposition{
 position:Position;
 address:string;
}