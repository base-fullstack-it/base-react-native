import {ProductDTO} from "./ProductDTO";
import {FlowerUnitEnum} from "../enum/FlowerUnitEnum";

export interface ProductToCartValues{
    productDTO:ProductDTO;
    unit?:FlowerUnitEnum;
    quantity:number;
}