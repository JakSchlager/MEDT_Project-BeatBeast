export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private phoneNr: string; 
    
    constructor(id:number, name:string, email:string, password:string, phoneNr:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNr = phoneNr; 
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPhoneNr(): string {
        return this.phoneNr;
    }
}