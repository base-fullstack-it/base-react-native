import {ProductDTO} from "../../../../model/dto/ProductDTO";
import ProductFlowerUnitButton from "./ProductFlowerUnitButton";
import {FlowerProductClass} from "../../../../model/class/product/FlowerProductClass";
import {FlowerUnitEnum} from "../../../../model/enum/FlowerUnitEnum";
//TODO: add the functionality to render the appropriate flower base on quanityt available etc
export default ({productDTO}:{productDTO:ProductDTO}) => {

    return <ProductFlowerUnitButton flowerProductClass={new FlowerProductClass(productDTO,FlowerUnitEnum.eighth)}/>
}