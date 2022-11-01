import {ProductDTO} from "../../../../model/dto/ProductDTO";
import ProductFlowerUnitButton from "./ProductFlowerUnitButton";
import {FlowerProductClass} from "../../../../model/class/product/FlowerProductClass";
import {FlowerUnitEnum} from "../../../../model/enum/FlowerUnitEnum";
import FlowerButtonOneQuantityFactory from "./FlowerButtonOneQuantityFactory";
//TODO: add the functionality to render the appropriate flower base on quanityt available etc
export default ({productDTO}: { productDTO: ProductDTO }) => {
    // const currentQuantityAvailableForProduct = useSelector(state => getCurrentQuantityAvailableForProduct(state,product.id));
    const currentQuantityAvailableForProduct = 1;

    return <>
        <FlowerButtonOneQuantityFactory
            productDTO={productDTO}
            currentQuantityAvailableForProduct={currentQuantityAvailableForProduct}
        />
        {currentQuantityAvailableForProduct > 3 &&
            <ProductFlowerUnitButton
                flowerProductClass={new FlowerProductClass(productDTO, FlowerUnitEnum.half)}
            />
        }
        {currentQuantityAvailableForProduct > 7 &&
            <ProductFlowerUnitButton
                flowerProductClass={new FlowerProductClass(productDTO, FlowerUnitEnum.oz)}
            />
        }
    </>
}