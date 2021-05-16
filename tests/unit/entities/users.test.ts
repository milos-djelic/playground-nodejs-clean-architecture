import { User } from "../../../src/entities/user";

const rawResponse = {
    data: {
        items : [
            {login: "abc", avatar_url: "123", url: "www.com"}, 
            {login: "efg", avatar_url: "456", url: "www.com"}, 
            {login: "hij", avatar_url: "789", url: "www.com"}
        ]
    }
};

const item = {login: "abc", avatar_url: "123", url: "www.com"};

describe('Users', () => {
    describe('create', () => {
        it('should return a result which is an instance of "User"', () => {
            const result = User.create(item);
            expect(result).toBeInstanceOf(User);
        });

        it ('should create a user instance from the raw response', () => {
            const result = User.create(item);
            expect(result.avatar).toEqual("123");
            expect(result.username).toEqual("abc");
            expect(result.url).toEqual("www.com");

        });
    })

    describe('createFromResponse', () => {
        it('should return the same number of items as there are in the raw response', () => {
            const result = User.createFromResponse(rawResponse);
            
            expect(result.length).toEqual(rawResponse.data.items.length);
        });
        it('should call function create 3 times', () => {
            User.create = jest.fn();

            User.createFromResponse(rawResponse);
            expect(User.create).toHaveBeenCalledTimes(3);
        });
    });

});