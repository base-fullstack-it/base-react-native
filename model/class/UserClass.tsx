import {UserDTO} from "../dto/UserDTO";

export class UserClass {
    constructor(
        private readonly userDTO:UserDTO
    )
    {}
    get fullName():string {
        return `${this.userDTO.firstName} ${this.userDTO.last_name}`;
    }
    get dateOfBirth():string{
        return this.userDTO.date_of_birth;
    }
    get phoneNumber():string{
        return this.userDTO.phone_number;
    }
    get email():string{
        return this.userDTO.email;
    }
    get id():string{
        return this.userDTO.id;
    }

}