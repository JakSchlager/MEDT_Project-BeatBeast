export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private phoneNr: string; 
    private profilePic: string

    constructor(id:number, name:string, email:string, password:string, phoneNr:string, profilePic: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNr = phoneNr; 
        this.profilePic = profilePic; 
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getPassword():string {
       return this.password;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPhoneNr(): string {
        return this.phoneNr;
    }
    public getProfilePic():string {
        return this.profilePic; 
    }
}