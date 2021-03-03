import axios from "axios";
import { User } from "../entities/user";

export class EnrichUsers {
    public async execute(user: User): Promise<User> {
        const {data : {name, followers}} = await axios.get(user.url);
        console.log(user.username, name, followers);

        const enrichedUser = new User();

        enrichedUser.avatar = user.avatar;
        enrichedUser.username = user.username;
        enrichedUser.name = name;
        enrichedUser.numberOfFollowers = followers;

        return enrichedUser;
    }
}