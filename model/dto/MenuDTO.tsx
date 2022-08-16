import {ProductCategoryDTO} from "./ProductCategoryDTO";
import {ProductDTO} from "./ProductDTO";
import {BrandDTO} from "./BrandDTO";
import {DSPRDTO} from "./DSPRDTO";

export interface MenuDTO {
    readonly driver: Readonly<DSPRDTO>,
    readonly dspr: Readonly<DSPRDTO>,
    readonly productCategories:ReadonlyArray<ProductCategoryDTO[]>,
    readonly products: ReadonlyArray<ProductDTO[]>,
    readonly address: Readonly<AddressDTO>,
    readonly brands: ReadonlyArray<BrandDTO[]>
}
//    driver: dsprDriverSchema,
//     dspr: dsprSchema,
//     productCategories: arrayOf(productCategorySchema),
//     products: arrayOf(dspProductSchema),
//     address: addressSchema,
//     brands: arrayOf(dspBrandSchema)