import {ProductDTO} from "../../dto/ProductDTO";
import {FlowerUnitDTO} from "../../dto/FlowerUnitDTO";
import {ProductToCartValues} from "../../dto/ProductToCartValues";


export abstract class ProductClass {
    protected constructor(
        readonly productDTO:ProductDTO,
    ) {}

    protected getDisplayPriceFrom(price:any){
        const priceTransformed = Number.isInteger(price) ?  price : parseFloat(price.toString()).toFixed(2);
        return '$' + priceTransformed;
    }

    abstract productToCartValues():ProductToCartValues;



}