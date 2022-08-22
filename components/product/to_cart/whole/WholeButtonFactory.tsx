import WholeUnitButton from "./WholeUnitButton";
import {ProductDTO} from "../../../../model/dto/ProductDTO";
import {WholeProductClass} from "../../../../model/class/product/WholeProductClass";

export default ({productDTO}:{productDTO:ProductDTO}) => {
    const wholeUnitButtons = [];
    for(let i = 1; i<=4;i++) wholeUnitButtons.push(
        <WholeUnitButton
            wholeProductClass={new WholeProductClass(productDTO,i)}
            // orderDetailInCartForProduct={orderDetailInCartForProduct}
        />
    )
    return <>{wholeUnitButtons}</>
}