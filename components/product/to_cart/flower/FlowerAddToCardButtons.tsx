import {ProductDTO} from "../../../../model/dto/ProductDTO";
import ProductFlowerUnitButton from "./ProductFlowerUnitButton";
import {FLOWER_UNITS} from "../../../../model/enum/FLOWER_UNITS";
//TODO: add the functionality to render the appropriate flower base on quanityt available etc
export default ({productDTO}:{productDTO:ProductDTO}) => {
    return <ProductFlowerUnitButton product={productDTO} unit={FLOWER_UNITS.eighth}/>
}