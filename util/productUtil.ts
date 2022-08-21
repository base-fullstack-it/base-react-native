import {ProductDTO} from "../model/dto/ProductDTO";
import FlowerTypeOrder from "../model/enum/FlowerTypeOrder";

// const flowerTypeOrder = {sativa: 1, sativa_hybrid: 2, hybrid: 3, indica_hybrid: 4, indica: 5, cbd: 6, other: 7};

export const filterProductsBy = (products:ReadonlyArray<ProductDTO>, categoryId:number) => {
    return products ? products.filter((product: any) => !!product.currentQuantityAvailable).filter(product => product.productCategories
            .map(category => category.id)
            .indexOf(categoryId) >= 0)
            .sort(sortProduct)
        : [];
};

export const sortProduct = (a:ProductDTO, b:ProductDTO) => {
    if (a.flowerType !== b.flowerType) {
        // return flowerTypeOrder[a.flowerType] < flowerTypeOrder[b.flowerType] ? -1 : 1;

        return a.flowerType < b.flowerType ? -1 : 1;
    }
    const aPrice = a.isFlower ? a.currentPrice.eighthPrice : a.currentPrice.price;
    const bPrice = b.isFlower ? b.currentPrice.eighthPrice : b.currentPrice.price;
    if (aPrice === bPrice) return 0;
    return aPrice < bPrice ? 1 : -1;
};

export const createDisplayPrice = (price:any) => {
    const priceTransformed = Number.isInteger(price) ?  price : parseFloat(price).toFixed(2);
    return '$' + priceTransformed;
}

export const uppercaseFlowerType = (product:any) => {
    const strLiteral = product.flowerType.toString();
    return product.flowerType.replace("_", " ").toUpperCase();
}