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


import * as runtime from '../runtime';
import type {
  ApiInfo,
} from '../models/index';
import {
    ApiInfoFromJSON,
    ApiInfoToJSON,
} from '../models/index';

/**
 * 
 */
export class APIInfoApi extends runtime.BaseAPI {

    /**
     * APIのバージョン等、APIの情報を取得する
     * APIの情報を取得する
     */
    async getApiInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiInfoFromJSON(jsonValue));
    }

    /**
     * APIのバージョン等、APIの情報を取得する
     * APIの情報を取得する
     */
    async getApiInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiInfo> {
        const response = await this.getApiInfoRaw(initOverrides);
        return await response.value();
    }

}
