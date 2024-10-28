import { Group } from "./group";

//Base user definition
export interface User {
    id:number,
    username:string,
    email:string,
    groups: Group[]
}

