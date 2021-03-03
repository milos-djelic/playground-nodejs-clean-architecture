import { QueryParams } from "../entities/query-params";
import { User } from "../entities/user";
import { iService } from "../services/i-service";
import { EnrichUsers } from "./enrich-users";

export class GetUsersUsecase {
    private enrichUsers = new EnrichUsers();

    constructor(
        readonly githubService: iService
    ) {}

    public async execute(queryParams: QueryParams): Promise<User[]> {
        // get users from service
        const rawResponse = await this.githubService.getUsersBy(queryParams);

        // process response and get entitites
        const users = await User.createFromResponse(rawResponse);
        
        // add the missing fields to the user 
        const enrichedUsersPromises = users.map(this.enrichUsers.execute);

        return await Promise.all(enrichedUsersPromises);
    }
}
