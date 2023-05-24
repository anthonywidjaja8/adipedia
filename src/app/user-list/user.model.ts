export class User {
    public username: string;
    public role: string;
    public isEnabled: boolean;
    public isLocked: boolean;

    constructor(username: string, role: string, isEnabled: boolean, isLocked: boolean) {
        this.username = username;
        this.role = role;
        this.isEnabled = isEnabled;
        this.isLocked = isLocked;
    }
}