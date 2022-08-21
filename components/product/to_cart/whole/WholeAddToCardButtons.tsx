import WholeUnitButton from "./WholeUnitButton";
import {ProductDTO} from "../../../../model/dto/ProductDTO";

export default ({productDTO}:{productDTO:ProductDTO}) => {
    console.log("DO I EVER MAAAA")
    const wholeUnitButtons = [];
    //the index is also used as a multiplier
    for(let i = 1; i<=4;i++) wholeUnitButtons.push(
        <WholeUnitButton
            idx={i}
            product={productDTO}
            // orderDetailInCartForProduct={orderDetailInCartForProduct}
        />
    )
    return <>{wholeUnitButtons}</>
}