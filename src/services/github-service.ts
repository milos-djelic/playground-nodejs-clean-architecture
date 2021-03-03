import axios from "axios";
import { QueryParams, QUERY_PARAMS } from "../entities/query-params";
import { RawResponse } from "../entities/user";
import { iService } from "./i-service";

const BASE_QUERY_URL = 'https://api.github.com/search/users?per_page=10&q=';

export class GithubService implements iService{
    public async getUsersBy(queryParams: QueryParams): Promise<RawResponse> {
            if (queryParams[QUERY_PARAMS.LANGUAGE]) {

                const url = `${BASE_QUERY_URL}language:${queryParams[QUERY_PARAMS.LANGUAGE]}`;
                const config = {
                    headers: {
                        Accept: 'application/vnd.github.v3+json'
                    }
                }; 
                return await axios.get(url, config);
            }
        throw new Error(`Query parameters: ${JSON.stringify(queryParams)} not valid.`);
    }
}