import { Food } from "./models/Food";

export class CartItem
{
    constructor(food:Food)
    {
        this.food=food;
    }
    food:Food;
    qunatity:number = 1;

    get price():number{
        return this.food.price * this.qunatity;
    }
}