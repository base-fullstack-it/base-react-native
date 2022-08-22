import {ProductDTO} from "../../../model/dto/ProductDTO";
import FlowerButtonFactory from "./flower/FlowerButtonFactory";
import WholeButtonFactory from "./whole/WholeButtonFactory";

export default ({productDTO}:{productDTO:ProductDTO}) => {

    if(productDTO.isFlower) return <FlowerButtonFactory productDTO={productDTO} />;
    else return <WholeButtonFactory productDTO={productDTO} />;

}