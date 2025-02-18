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
 * @interface ApplicationInfo
 */
export interface ApplicationInfo {
    /**
     * アプリID
     * 
     * @type {string}
     * @memberof ApplicationInfo
     */
    readonly appId: string;
    /**
     * 名前
     * 
     * @type {string}
     * @memberof ApplicationInfo
     */
    name: string;
    /**
     * 説明
     * 
     * @type {string}
     * @memberof ApplicationInfo
     */
    description: string;
    /**
     * オーナー
     * 
     * @type {string}
     * @memberof ApplicationInfo
     */
    owner: string;
    /**
     * デフォルトロール
     * 
     * @type {string}
     * @memberof ApplicationInfo
     */
    defaultRole: string;
    /**
     * 作成日時
     * 
     * @type {Date}
     * @memberof ApplicationInfo
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the ApplicationInfo interface.
 */
export function instanceOfApplicationInfo(value: object): value is ApplicationInfo {
    if (!('appId' in value) || value['appId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('defaultRole' in value) || value['defaultRole'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function ApplicationInfoFromJSON(json: any): ApplicationInfo {
    return ApplicationInfoFromJSONTyped(json, false);
}

export function ApplicationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'appId': json['app_id'],
        'name': json['name'],
        'description': json['description'],
        'owner': json['owner'],
        'defaultRole': json['default_role'],
        'createdAt': (new Date(json['created_at'])),
    };
}

  export function ApplicationInfoToJSON(json: any): ApplicationInfo {
      return ApplicationInfoToJSONTyped(json, false);
  }

  export function ApplicationInfoToJSONTyped(value?: Omit<ApplicationInfo, 'app_id'|'created_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'owner': value['owner'],
        'default_role': value['defaultRole'],
    };
}

