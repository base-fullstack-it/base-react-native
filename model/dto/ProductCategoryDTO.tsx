import {DeliveryServiceProviderDTO} from "./DeliveryServiceProviderDTO";
import {DSPRProductCategoryPromotion} from "./DSPRProductCategoryPromotion";
import {ProductDTO} from "./ProductDTO";

export interface ProductCategoryDTO{
    readonly id: number;
    readonly deliveryServiceProvider: DeliveryServiceProviderDTO;
    readonly name: string;
    readonly order: number;
    readonly imageLocation: string;
    readonly dsprProductCategoryPromotion:DSPRProductCategoryPromotion;
    readonly products: ProductDTO[];
}
//    private int id;
//     private DeliveryServiceProvider deliveryServiceProvider;
//     private String name;
//     private Integer order;
//     private String imageLocation;
//     private DSPRProductCategoryPromotion dsprProductCategoryPromotion;
//     private List<Product> products;