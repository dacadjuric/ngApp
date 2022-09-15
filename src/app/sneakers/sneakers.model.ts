
export class Sneakers{
    public imagePath: string;
    public name: string;
    public description: string;
    public price: number;

    constructor(name: string, description: string, image: string, price: number){
        this.name = name;
        this.description = description;
        this.imagePath = image;
        this.price = price;
    }
}