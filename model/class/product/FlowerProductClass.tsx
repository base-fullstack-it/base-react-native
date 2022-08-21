import {ProductDTO} from "../../dto/ProductDTO";
import {FlowerUnitDTO} from "../../dto/FlowerUnitDTO";
import {ProductClass} from "./ProductClass";
import {FLOWER_UNITS} from "../../enum/FLOWER_UNITS";
import {FlowerUnitsDTO} from "../../dto/FlowerUnitsDTO";
import {FlowerUnitEnum} from "../../enum/FlowerUnitEnum";


export class FlowerProductClass extends ProductClass {
    // private FLOWER_UNITS:FlowerUnitsDTO;
    constructor(
        productDTO:ProductDTO,
        // private readonly flowerUnitDTO:FlowerUnitDTO,
        private readonly flowerUnitEnum:FlowerUnitEnum
    )
    {super(productDTO)}
    public getCurrentFlowerPrice(){
    // const price = this.productDTO.currentPrice[`${unit.name}Price`] || null;//https://stackoverflow.com/questions/60709946/using-or-syntax-inside-of-react-usestate-for-assignment
    //     const price = this.productDTO.currentPrice['eighthPrice'] || null;//https://stackoverflow.com/questions/60709946/using-or-syntax-inside-of-react-usestate-for-assignment
    //     console.log(this.flowerUnitDTO.name,'lol')
    // const price = this.productDTO.currentPrice[`${this.flowerUnitDTO.name}Price`] || null;//https://stackoverflow.com/questions/60709946/using-or-syntax-inside-of-react-usestate-for-assignment
    //     console.log(price,"PRECIO")
        return this.productDTO.currentPrice;
    }
    public getDisplayPriceFromCurrentPrice(){
        const price = this.getCurrentPriceOnFlowerUnit()
        const priceTransformed = Number.isInteger(price) ?  price : parseFloat(price.toString()).toFixed(2);
        return '$' + priceTransformed;
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