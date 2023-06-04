export class User {
    public email: string;
    public role: string;
    public status: string;

    constructor(email: string, role: string, status: string) {
        this.email = email;
        this.role = role;
        this.status = status;
    }
}