import {ProductCategoryDTO} from "./ProductCategoryDTO";
import {ProductDTO} from "./ProductDTO";
import {BrandDTO} from "./BrandDTO";
import {DSPRDTO} from "./DSPRDTO";

export interface MenuDTO {
    readonly driver: DSPRDTO,
    readonly dspr: DSPRDTO,
    readonly productCategories: ProductCategoryDTO[],
    readonly products: ProductDTO[],
    readonly address: AddressDTO,
    readonly brands: BrandDTO[]
}
//    driver: dsprDriverSchema,
//     dspr: dsprSchema,
//     productCategories: arrayOf(productCategorySchema),
//     products: arrayOf(dspProductSchema),
//     address: addressSchema,
//     brands: arrayOf(dspBrandSchema)