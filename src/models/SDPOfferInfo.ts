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
/**
 * 
 * @export
 * @interface SDPOfferInfo
 */
export interface SDPOfferInfo {
    /**
     * SDP ID
     * 
     * @type {string}
     * @memberof SDPOfferInfo
     */
    readonly sdpId: string;
    /**
     * 名前
     * 
     * @type {string}
     * @memberof SDPOfferInfo
     */
    readonly offerClientId: string;
    /**
     * Offerしたクライアントのロール
     * 
     * @type {string}
     * @memberof SDPOfferInfo
     */
    offerClientRole: SDPOfferInfoOfferClientRoleEnum;
    /**
     * 作成日時
     * 
     * @type {Date}
     * @memberof SDPOfferInfo
     */
    readonly createdAt: Date;
    /**
     * Offer SDP (Base64 encoded)
     * 
     * @type {string}
     * @memberof SDPOfferInfo
     */
    offer: string;
}


/**
 * @export
 */
export const SDPOfferInfoOfferClientRoleEnum = {
    Provider: 'provider',
    Subscriber: 'subscriber'
} as const;
export type SDPOfferInfoOfferClientRoleEnum = typeof SDPOfferInfoOfferClientRoleEnum[keyof typeof SDPOfferInfoOfferClientRoleEnum];


/**
 * Check if a given object implements the SDPOfferInfo interface.
 */
export function instanceOfSDPOfferInfo(value: object): value is SDPOfferInfo {
    if (!('sdpId' in value) || value['sdpId'] === undefined) return false;
    if (!('offerClientId' in value) || value['offerClientId'] === undefined) return false;
    if (!('offerClientRole' in value) || value['offerClientRole'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('offer' in value) || value['offer'] === undefined) return false;
    return true;
}

export function SDPOfferInfoFromJSON(json: any): SDPOfferInfo {
    return SDPOfferInfoFromJSONTyped(json, false);
}

export function SDPOfferInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SDPOfferInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'sdpId': json['sdp_id'],
        'offerClientId': json['offer_client_id'],
        'offerClientRole': json['offer_client_role'],
        'createdAt': (new Date(json['created_at'])),
        'offer': json['offer'],
    };
}

  export function SDPOfferInfoToJSON(json: any): SDPOfferInfo {
      return SDPOfferInfoToJSONTyped(json, false);
  }

  export function SDPOfferInfoToJSONTyped(value?: Omit<SDPOfferInfo, 'sdp_id'|'offer_client_id'|'created_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'offer_client_role': value['offerClientRole'],
        'offer': value['offer'],
    };
}

