import axios from "axios";
import { User } from "../entities/user";
import { iService } from "../services/i-service";

export class GetKnownForRepositoryUsecase {
    constructor(readonly githubService: iService) {}

    public async execute(user: User): Promise<User> {
        
        const repositories = await this.githubService.getUserRepositories(user);

        const compare = (a:any, b:any) => a.stargazers_count - b.stargazers_count;
        
        repositories.sort(compare);

        const enrichedUser = new User();

        enrichedUser.avatar = user.avatar;
        enrichedUser.username = user.username;
        enrichedUser.name = user.name;
        enrichedUser.numberOfFollowers = user.numberOfFollowers;

        enrichedUser.knownFor = repositories[0]?.name;
        
        return enrichedUser;

        
       
    }
}