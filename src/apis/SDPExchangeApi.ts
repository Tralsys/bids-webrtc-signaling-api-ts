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
  GetClientInfoList401Response,
  PostSDPOfferInfoRequestBody,
  PostSDPOfferInfoResponse,
  SDPAnswerInfo,
} from '../models/index';
import {
    GetClientInfoList401ResponseFromJSON,
    GetClientInfoList401ResponseToJSON,
    PostSDPOfferInfoRequestBodyFromJSON,
    PostSDPOfferInfoRequestBodyToJSON,
    PostSDPOfferInfoResponseFromJSON,
    PostSDPOfferInfoResponseToJSON,
    SDPAnswerInfoFromJSON,
    SDPAnswerInfoToJSON,
} from '../models/index';

export interface DeleteSDPExchangeRequest {
    sdpId: string;
    xClientId: string;
}

export interface GetAnswerRequest {
    xClientId: string;
    sdpId: string;
}

export interface RegisterAnswerRequest {
    xClientId: string;
    sDPAnswerInfo: Array<SDPAnswerInfo>;
}

export interface RegisterOfferRequest {
    xClientId: string;
    postSDPOfferInfoRequestBody: PostSDPOfferInfoRequestBody;
}

/**
 * 
 */
export class SDPExchangeApi extends runtime.BaseAPI {

    /**
     * SDP Exchangeレコードを削除する 
     * SDP Exchangeのレコードを削除する
     */
    async deleteSDPExchangeRaw(requestParameters: DeleteSDPExchangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sdpId'] == null) {
            throw new runtime.RequiredError(
                'sdpId',
                'Required parameter "sdpId" was null or undefined when calling deleteSDPExchange().'
            );
        }

        if (requestParameters['xClientId'] == null) {
            throw new runtime.RequiredError(
                'xClientId',
                'Required parameter "xClientId" was null or undefined when calling deleteSDPExchange().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xClientId'] != null) {
            headerParameters['X-Client-Id'] = String(requestParameters['xClientId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exchange/{sdpId}`.replace(`{${"sdpId"}}`, encodeURIComponent(String(requestParameters['sdpId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * SDP Exchangeレコードを削除する 
     * SDP Exchangeのレコードを削除する
     */
    async deleteSDPExchange(requestParameters: DeleteSDPExchangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSDPExchangeRaw(requestParameters, initOverrides);
    }

    /**
     * 自身が登録したSDP Offerに対するAnswerを取得する 
     * SDP Answer取得
     */
    async getAnswerRaw(requestParameters: GetAnswerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SDPAnswerInfo>> {
        if (requestParameters['xClientId'] == null) {
            throw new runtime.RequiredError(
                'xClientId',
                'Required parameter "xClientId" was null or undefined when calling getAnswer().'
            );
        }

        if (requestParameters['sdpId'] == null) {
            throw new runtime.RequiredError(
                'sdpId',
                'Required parameter "sdpId" was null or undefined when calling getAnswer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xClientId'] != null) {
            headerParameters['X-Client-Id'] = String(requestParameters['xClientId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/answer/{sdpId}`.replace(`{${"sdpId"}}`, encodeURIComponent(String(requestParameters['sdpId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SDPAnswerInfoFromJSON(jsonValue));
    }

    /**
     * 自身が登録したSDP Offerに対するAnswerを取得する 
     * SDP Answer取得
     */
    async getAnswer(requestParameters: GetAnswerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SDPAnswerInfo | null | undefined > {
        const response = await this.getAnswerRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 204:
                return null;
            default:
                return await response.value();
        }
    }

    /**
     * SDP Answerを登録する  ここでAnswerを登録しなかった場合、接続しないものとしてanswer登録待機を解除します。 
     * SDP Answer登録
     */
    async registerAnswerRaw(requestParameters: RegisterAnswerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['xClientId'] == null) {
            throw new runtime.RequiredError(
                'xClientId',
                'Required parameter "xClientId" was null or undefined when calling registerAnswer().'
            );
        }

        if (requestParameters['sDPAnswerInfo'] == null) {
            throw new runtime.RequiredError(
                'sDPAnswerInfo',
                'Required parameter "sDPAnswerInfo" was null or undefined when calling registerAnswer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xClientId'] != null) {
            headerParameters['X-Client-Id'] = String(requestParameters['xClientId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/answer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['sDPAnswerInfo']!.map(SDPAnswerInfoToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * SDP Answerを登録する  ここでAnswerを登録しなかった場合、接続しないものとしてanswer登録待機を解除します。 
     * SDP Answer登録
     */
    async registerAnswer(requestParameters: RegisterAnswerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.registerAnswerRaw(requestParameters, initOverrides);
    }

    /**
     * SDP Offerを登録する  自身がAnswerできるOfferが登録されている場合、同時にそれも取得します。 
     * SDP Offer登録
     */
    async registerOfferRaw(requestParameters: RegisterOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostSDPOfferInfoResponse>> {
        if (requestParameters['xClientId'] == null) {
            throw new runtime.RequiredError(
                'xClientId',
                'Required parameter "xClientId" was null or undefined when calling registerOffer().'
            );
        }

        if (requestParameters['postSDPOfferInfoRequestBody'] == null) {
            throw new runtime.RequiredError(
                'postSDPOfferInfoRequestBody',
                'Required parameter "postSDPOfferInfoRequestBody" was null or undefined when calling registerOffer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xClientId'] != null) {
            headerParameters['X-Client-Id'] = String(requestParameters['xClientId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/offer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostSDPOfferInfoRequestBodyToJSON(requestParameters['postSDPOfferInfoRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostSDPOfferInfoResponseFromJSON(jsonValue));
    }

    /**
     * SDP Offerを登録する  自身がAnswerできるOfferが登録されている場合、同時にそれも取得します。 
     * SDP Offer登録
     */
    async registerOffer(requestParameters: RegisterOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostSDPOfferInfoResponse> {
        const response = await this.registerOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
