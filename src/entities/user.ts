export class User {
    public username: string;
    public name: string;
    public avatar: string;
    public numberOfFollowers: number;
    public url: string;
    public knownFor: string; // name of the repository with the most stars

    public static create(data: RawUserResponse): User {
        const instance = new User();
        instance.username = data.login;
        instance.avatar = data.avatar_url;
        instance.url = data.url;

        return instance; 
    }

    public static createFromResponse (response: RawResponse) : User[] {
        const users = response?.data?.items || [];
        return users.map(this.create);
    }

}

// @TODO map this properly
export interface RawResponse {
    [key: string]: any;
}

// @TODO map this properly
export interface RawUserResponse {
    [key: string]: any;
}
