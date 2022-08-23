
export class Sneakers{
    public imagePath: string;
    public name: string;
    public description: string;
    public amount: number;

    constructor(name: string, description: string, image: string, amount: number){
        this.name = name;
        this.description = description;
        this.imagePath = image;
        this.amount = amount;
    }
}