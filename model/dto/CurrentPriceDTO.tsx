import {DSPRDTO} from "./DSPRDTO";

export interface CurrentPriceDTO {
    readonly current:boolean;
    readonly dspr:Readonly<DSPRDTO>;
    readonly price:number;
}
// {
// //       "current": true,
// //       "dspr": Object {
// //         "id": 1,
// //       }