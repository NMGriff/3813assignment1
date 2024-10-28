import { User } from "./user";

//channels
export interface Channel {
    id:number,
    name:string,
    users:User[]
}
