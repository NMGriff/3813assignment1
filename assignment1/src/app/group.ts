import { Channel } from "./channel";
import { User } from "./user";

export interface Group {
    id:number,
    name:string,
    users:User[],
    channels:Channel[]
}
