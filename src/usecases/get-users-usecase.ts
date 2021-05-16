import { QueryParams } from "../entities/query-params";
import { User } from "../entities/user";
import { iService } from "../services/i-service";
import { EnrichUsers } from "./enrich-users";
import { GetKnownForRepositoryUsecase} from './get-known-for-repository';

export class GetUsersUsecase {
    private enrichUsers = new EnrichUsers(this.githubService);
    private getKnownForRepositoryUsecase = new GetKnownForRepositoryUsecase(this.githubService);

    constructor(
        readonly githubService: iService
    ) {}

    public async execute(queryParams: QueryParams): Promise<User[]> {
        const rawResponse = await this.githubService.getUsersBy(queryParams);
        const users = User.createFromResponse(rawResponse);
        const enrichedUsersPromises = users.map(this.enrichUsers.execute);

        const enrichedUsers =  await Promise.all(enrichedUsersPromises);
        const usersWithRepositoriesPromises = enrichedUsers.map(this.getKnownForRepositoryUsecase.execute);
        return  await Promise.all(usersWithRepositoriesPromises);
    }
}
