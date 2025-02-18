/* tslint:disable */
/* eslint-disable */
/**
 * BIDS WebRTC Signaling API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SDPOfferInfo } from './SDPOfferInfo';
import {
    SDPOfferInfoFromJSON,
    SDPOfferInfoFromJSONTyped,
    SDPOfferInfoToJSON,
    SDPOfferInfoToJSONTyped,
} from './SDPOfferInfo';

/**
 * 
 * @export
 * @interface PostSDPOfferInfoResponse
 */
export interface PostSDPOfferInfoResponse {
    /**
     * 
     * @type {SDPOfferInfo}
     * @memberof PostSDPOfferInfoResponse
     */
    registeredOffer?: SDPOfferInfo;
    /**
     * 
     * @type {Array<SDPOfferInfo>}
     * @memberof PostSDPOfferInfoResponse
     */
    receivedOffers?: Array<SDPOfferInfo>;
}

/**
 * Check if a given object implements the PostSDPOfferInfoResponse interface.
 */
export function instanceOfPostSDPOfferInfoResponse(value: object): value is PostSDPOfferInfoResponse {
    return true;
}

export function PostSDPOfferInfoResponseFromJSON(json: any): PostSDPOfferInfoResponse {
    return PostSDPOfferInfoResponseFromJSONTyped(json, false);
}

export function PostSDPOfferInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostSDPOfferInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'registeredOffer': json['registered_offer'] == null ? undefined : SDPOfferInfoFromJSON(json['registered_offer']),
        'receivedOffers': json['received_offers'] == null ? undefined : ((json['received_offers'] as Array<any>).map(SDPOfferInfoFromJSON)),
    };
}

  export function PostSDPOfferInfoResponseToJSON(json: any): PostSDPOfferInfoResponse {
      return PostSDPOfferInfoResponseToJSONTyped(json, false);
  }

  export function PostSDPOfferInfoResponseToJSONTyped(value?: PostSDPOfferInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'registered_offer': SDPOfferInfoToJSON(value['registeredOffer']),
        'received_offers': value['receivedOffers'] == null ? undefined : ((value['receivedOffers'] as Array<any>).map(SDPOfferInfoToJSON)),
    };
}

