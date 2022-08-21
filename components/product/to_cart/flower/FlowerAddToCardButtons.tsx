import {ProductDTO} from "../../../../model/dto/ProductDTO";
import ProductFlowerUnitButton from "./ProductFlowerUnitButton";
import {FLOWER_UNITS} from "../../../../model/enum/FLOWER_UNITS";
import {FlowerProductClass} from "../../../../model/class/product/FlowerProductClass";
//TODO: add the functionality to render the appropriate flower base on quanityt available etc
export default ({productDTO}:{productDTO:ProductDTO}) => {

    // return <ProductFlowerUnitButton product={productDTO} unit={FLOWER_UNITS.eighth}/>
    return <ProductFlowerUnitButton flowerProductClass={new FlowerProductClass(productDTO,FLOWER_UNITS.eighth)}/>
}