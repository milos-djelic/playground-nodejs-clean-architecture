import axios from "axios";
import { QueryParams, QUERY_PARAMS } from "../entities/query-params";
import { RawResponse, User } from "../entities/user";
import { iService } from "./i-service";

const BASE_QUERY_URL = "https://api.github.com/search/users?per_page=10&q=";
const API_KEY = "";

export class GithubService implements iService {
  private createHeaders() {
    return {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${API_KEY}`,
    };
  }
  public async getUsersBy(queryParams: QueryParams): Promise<RawResponse> {
    if (queryParams[QUERY_PARAMS.LANGUAGE]) {
      const url = `${BASE_QUERY_URL}language:${
        queryParams[QUERY_PARAMS.LANGUAGE]
      }`;
      const config = { headers: this.createHeaders() };
      return await axios.get(url, config);
    }
    throw new Error(
      `Query parameters: ${JSON.stringify(queryParams)} not valid.`
    );
  }

  public async getUserDetails(
    user: User
  ): Promise<{ name: string; followers: number }> {
      const config = { headers: this.createHeaders() };
      const { data } = await axios.get(user.url, config);
      return data;
  }

  public async getUserRepositories(user: User): Promise<any[]> {
    const username = user.username;
    const url = `https://api.github.com/users/${username}/repos`;

    const config = { headers: this.createHeaders() };
    const { data: repositories } = await axios.get(url, config);
    return repositories;
  }
}
