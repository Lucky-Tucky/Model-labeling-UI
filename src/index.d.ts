interface BoundingBox {
    id:number;
    x : number;
    y : number;
    width : number;
    height : number;
}

interface Options {
    label: Label[];
    options : string[];
}

interface Label {
    level: number;
    label: string;
}