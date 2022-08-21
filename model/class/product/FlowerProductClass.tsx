import {ProductDTO} from "../../dto/ProductDTO";
import {ProductClass} from "./ProductClass";
import {FlowerUnitEnum} from "../../enum/FlowerUnitEnum";
import {ProductToCartValues} from "../../dto/ProductToCartValues";
export class FlowerProductClass extends ProductClass {

    constructor(
        productDTO:ProductDTO,
        private readonly flowerUnitEnum:FlowerUnitEnum
    ) {
        super(productDTO)
    }
    public productToCartValues():ProductToCartValues{
        return {
            productDTO: this.productDTO,
            unit: this.getCurrentPriceOnFlowerUnit(),
            quantity: 1
        }
    }
    public uppercaseFlowerType(){
        return this.productDTO.flowerType.toString().replace("_", " ").toUpperCase();
    }
    public getDisplayPrice(){
        const price = this.getCurrentPriceOnFlowerUnit()
        return super.getDisplayPriceFrom(price);
    }

    private getCurrentPriceOnFlowerUnit():number {
        switch(this.flowerUnitEnum){
            case FlowerUnitEnum.eighth:
                return this.productDTO.currentPrice.eighthPrice;
            case FlowerUnitEnum.oz:
                return this.productDTO.currentPrice.ozPrice;
            case FlowerUnitEnum.half:
                return this.productDTO.currentPrice.halfPrice;
            case FlowerUnitEnum.quarter:
                return this.productDTO.currentPrice.quarterPrice;
        }
    }
}