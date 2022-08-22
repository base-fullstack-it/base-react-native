import {ProductClass} from "./ProductClass";
import {ProductDTO} from "../../dto/ProductDTO";
import {FlowerUnitEnum} from "../../enum/FlowerUnitEnum";
import {ProductToCartValues} from "../../dto/ProductToCartValues";

export class WholeProductClass extends ProductClass{
    constructor(
        productDTO:ProductDTO,
        private readonly idx:number
    ) {
        super(productDTO)
    }

    productToCartValues(): ProductToCartValues {
        return {
            productDTO: this.productDTO,
            quantity: this.idx
        }
    }
    public getDisplayPrice(){
        const price = this.idx * this.productDTO.currentPrice.price;
        return super.getDisplayPriceFrom(price);
    }
}