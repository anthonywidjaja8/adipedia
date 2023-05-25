export class User {
    public username: string;
    public role: string;
    public status: string;

    constructor(username: string, role: string, status: string) {
        this.username = username;
        this.role = role;
        this.status = status;
    }
}