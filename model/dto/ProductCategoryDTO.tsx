import {DeliveryServiceProviderDTO} from "./DeliveryServiceProviderDTO";
import {DSPRProductCategoryPromotion} from "./DSPRProductCategoryPromotion";
import {ProductDTO} from "./ProductDTO";

export interface ProductCategoryDTO{
    readonly id: number;
    readonly deliveryServiceProvider: Readonly<DeliveryServiceProviderDTO>;
    readonly name: string;
    readonly order: number;
    readonly imageLocation: string;
    readonly dsprProductCategoryPromotion:Readonly<DSPRProductCategoryPromotion>;
    readonly products: ReadonlyArray<ProductDTO[]>;
}
//    private int id;
//     private DeliveryServiceProvider deliveryServiceProvider;
//     private String name;
//     private Integer order;
//     private String imageLocation;
//     private DSPRProductCategoryPromotion dsprProductCategoryPromotion;
//     private List<Product> products;