export class Report {
    public buyer: string;
    public date: string;
    public id: string;
    public name: string
    public price: number;
    public quantity: number;

    constructor(buyer: string, date: string, id: string,
        name: string, price: number, quantity: number) {
        this.buyer = buyer;
        this.date = date;
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}