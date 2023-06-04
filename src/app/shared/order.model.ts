export class Order {
    public id: string;
    public txnDate: string;
    public buyer: string;
    public status: string;
    public receipt: string;
    public products: string[];

    constructor(id: string, txnDate: string, buyer: string, 
        status: string, receipt: string, products: string[]) {
        this.id = id;
        this.txnDate = txnDate;
        this.buyer = buyer;
        this.status = status;
        this.receipt = receipt
        this.products = products;
    }
}