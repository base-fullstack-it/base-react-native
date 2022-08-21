import {DSPRDTO} from "./DSPRDTO";

export interface DSPRProductPriceHistoryDTO {
    readonly current:boolean;
    readonly dspr:Readonly<DSPRDTO>;
    readonly price:number;
    readonly eighthPrice:number;
    readonly quarterPrice:number;
    readonly halfPrice:number;
    readonly ozPrice:number;
}
//    private BigDecimal price;
//     private BigDecimal eighthPrice;
//     private BigDecimal quarterPrice;
//     private BigDecimal halfPrice;
//     private BigDecimal ozPrice;
//     private Boolean current;
// {
// //       "current": true,
// //       "dspr": Object {
// //         "id": 1,
// //       }