import { QueryParams } from "../entities/query-params";
import { RawResponse } from "../entities/user";

export interface iService {
    getUsersBy(queryParams: QueryParams): RawResponse;
}
