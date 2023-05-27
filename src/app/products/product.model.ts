export class Product {
    public name: string;
    public price: number;
    public description: string;
    public imagePath: string;
    public categories: string[];

    constructor(name: string, price: number, description: string, imagePath: string, categories: string[]) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath
        this.categories = categories;
    }
}