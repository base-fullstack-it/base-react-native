import {ProductDTO} from "../../dto/ProductDTO";
import {ProductClass} from "./ProductClass";
import {FlowerUnitEnum} from "../../enum/FlowerUnitEnum";


export class FlowerProductClass extends ProductClass {
    // private FLOWER_UNITS:FlowerUnitsDTO;
    constructor(
        productDTO:ProductDTO,
        // private readonly flowerUnitDTO:FlowerUnitDTO,
        private readonly flowerUnitEnum:FlowerUnitEnum
    ) {
        super(productDTO)
    }
    public getDisplayPrice(){
        const price = this.getCurrentPriceOnFlowerUnit()
        return super.getDisplayPriceFrom(price);
    }

    private getCurrentPriceOnFlowerUnit() {
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