import { QueryParams } from "../entities/query-params";
import { RawResponse, User } from "../entities/user";

export interface iService {
    getUsersBy(queryParams: QueryParams): Promise<RawResponse>;
    getUserDetails(user: User): Promise<{name: string, followers: number}>;
    getUserRepositories(user:User):Promise<any[]>;
}
