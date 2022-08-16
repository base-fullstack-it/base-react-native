export interface UserDTO {
    readonly id: number;
    readonly email: string;
    readonly isEmailValidated: boolean;
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumber: string;
    readonly birthDate: number;
    readonly isPhoneNumberValidated: boolean;
    readonly signupZipCode: string;
    readonly systemAdministrator: boolean;
    readonly createdTimestamp: string;
    readonly userNotes?: any;
    readonly identificationDocument?: number;
    readonly medicalRecommendation?: number;
    readonly defaultAddress?: AddressDTO;
    readonly dsprManagers?: number[];
    readonly deliveryServiceProviderManagers?: number[];
    readonly dsprDrivers?: number[];
    readonly referrerCode?: string;
    readonly hasConvertedBonus?: boolean;
    readonly availableReferrerBonus?: number;
    readonly isFirstTimeUser?: boolean;
    readonly userDSPRDetails?: any[];
}
