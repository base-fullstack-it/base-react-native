import {ProductDTO} from "../../dto/ProductDTO";
import {FlowerUnitDTO} from "../../dto/FlowerUnitDTO";
import {ProductClass} from "./ProductClass";


export class FlowerProductClass extends ProductClass {
    constructor(
        private readonly flowerUnitDTO:FlowerUnitDTO,
        productDTO:ProductDTO
    )
    {super(productDTO)}
    // const price = product.currentPrice[`${unit.name}Price`] || null;//https://stackoverflow.com/questions/60709946/using-or-syntax-inside-of-react-usestate-for-assignment
    public getCurrentFlowerPrice(){
        return this.productDTO.currentPrice;
    }


}