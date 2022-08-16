import {ProductCategoryDTO} from "./ProductCategoryDTO";
import {ProductDTO} from "./ProductDTO";
import {BrandDTO} from "./BrandDTO";
import {DSPRDTO} from "./DSPRDTO";

export interface MenuDTO {
    driver: DSPRDTO,
    dspr: DSPRDTO,
    productCategories:ProductCategoryDTO[],
    products: ProductDTO[],
    address: AddressDTO,
    brands: BrandDTO[]
}
//    driver: dsprDriverSchema,
//     dspr: dsprSchema,
//     productCategories: arrayOf(productCategorySchema),
//     products: arrayOf(dspProductSchema),
//     address: addressSchema,
//     brands: arrayOf(dspBrandSchema)