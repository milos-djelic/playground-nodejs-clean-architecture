export enum QUERY_PARAMS {
    LANGUAGE = 'language',
}

export interface QueryParams {
 [QUERY_PARAMS.LANGUAGE]: string;    
 [key: string]: any;
}