import axios from "axios";
import { User } from "../entities/user";

export class EnrichUsers {
    public async execute(user: User): Promise<User> {
        // move this to the service
        const {data : {name, followers}} = await axios.get(user.url);

        const enrichedUser = new User();

        enrichedUser.avatar = user.avatar;
        enrichedUser.username = user.username;
        enrichedUser.name = name;
        enrichedUser.numberOfFollowers = followers;

        return enrichedUser;
    }
}