import {ProductDTO} from "../../../../model/dto/ProductDTO";
import ProductFlowerUnitButton from "./ProductFlowerUnitButton";
import {FlowerProductClass} from "../../../../model/class/product/FlowerProductClass";
import {FlowerUnitEnum} from "../../../../model/enum/FlowerUnitEnum";

export default ({
                    productDTO,
                    currentQuantityAvailableForProduct
                }: { productDTO: ProductDTO, currentQuantityAvailableForProduct: number }) => {

    return (
        currentQuantityAvailableForProduct > 1 ?
            <>
                <ProductFlowerUnitButton
                    flowerProductClass={new FlowerProductClass(productDTO, FlowerUnitEnum.eighth)}
                />
                <ProductFlowerUnitButton
                    flowerProductClass={new FlowerProductClass(productDTO, FlowerUnitEnum.quarter)}
                />
            </>
            :
            <ProductFlowerUnitButton
                flowerProductClass={new FlowerProductClass(productDTO, FlowerUnitEnum.eighth)}
            />
    )


}