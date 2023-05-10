import { IItem } from "./item";

export interface IList {
    id: number,
    name: string,
    items: IItem[]
};