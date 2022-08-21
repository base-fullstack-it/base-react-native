import {CurrentPriceDTO} from "./CurrentPriceDTO";
import {ProductCategoryDTO} from "./ProductCategoryDTO";

export interface ProductDTO {
    readonly id:number;
    readonly cbdMg:number;
    readonly price:number
    readonly cbdPercentage:number;
    readonly currentPrice:Readonly<CurrentPriceDTO>;
    readonly productCategories:ReadonlyArray<ProductCategoryDTO>;
    readonly productType:string;
    readonly name:string;
    readonly imageLocation:string;
    readonly flowerType:string;
}
// Object {
//     "cbdMg": 5,
//     "cbdPercentage": 25,
//     "cbnPercentage": 50,
//     "currentPrice": Object {
//       "current": true,
//       "dspr": Object {
//         "id": 1,
//       },
//       "id": 6,
//       "price": 500,
//     },
//     "currentQuantityAvailable": 90,
//     "deliveryServiceProvider": Object {
//       "id": 1,
//     },
//     "flowerType": "indica",
//     "id": 8,
//     "isActive": true,
//     "isExcludedFromCoupons": true,
//     "isFlower": false,
//     "name": "yel21",
//     "productCategories": Array [
//       Object {
//         "id": 9,
//         "imageLocation": "public/categories/9.jpg",
//         "name": "yellowsmellow",
//         "order": 4,
//       },
//     ],
//     "productType": "concentrate",
//     "thcMg": 4,
//     "thcPercentage": 4,
//   },