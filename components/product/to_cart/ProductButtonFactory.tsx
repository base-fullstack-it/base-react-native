import {ProductDTO} from "../../../model/dto/ProductDTO";
import FlowerAddToCardButtons from "./flower/FlowerAddToCardButtons";
import WholeAddToCardButtons from "./whole/WholeAddToCardButtons";

export default ({productDTO}:{productDTO:ProductDTO}) => {

    if(productDTO.isFlower) return <FlowerAddToCardButtons productDTO={productDTO} />;
    else return <WholeAddToCardButtons productDTO={productDTO} />;

}