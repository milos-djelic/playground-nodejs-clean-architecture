import { User } from "../entities/user";
import { iService } from "../services/i-service";

export class EnrichUsers {
  constructor(readonly githubService: iService) {}

  public async execute(user: User): Promise<User> {
    const { name, followers } = await this.githubService.getUserDetails(user);
    const enrichedUser = new User();

    enrichedUser.avatar = user.avatar;
    enrichedUser.username = user.username;
    enrichedUser.name = name;
    enrichedUser.numberOfFollowers = followers;

    return enrichedUser;
  }
}
