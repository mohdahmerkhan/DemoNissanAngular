import { Role } from "./role";

export class User
{
    userId : number = 0;
    userName : string;
    password : string;
    fullName : string;
    active : boolean;
    roleId : number;    //Join Column
    role : Role;

    constructor()
    {
        this.role = new Role();
    }
}
