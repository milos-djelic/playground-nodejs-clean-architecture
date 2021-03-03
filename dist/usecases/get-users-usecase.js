"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersUsecase = void 0;
const user_1 = require("../entities/user");
const enrich_users_1 = require("./enrich-users");
class GetUsersUsecase {
    constructor(githubService) {
        this.githubService = githubService;
        this.enrichUsers = new enrich_users_1.EnrichUsers();
    }
    execute(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            // get users from service
            const rawResponse = yield this.githubService.getUsersBy(queryParams);
            // process response and get entitites
            const users = yield user_1.User.createFromResponse(rawResponse);
            return users;
            // add the missing fields to the user 
            const enrichedUsersPromises = users.map(this.enrichUsers.execute);
            return Promise.all(enrichedUsersPromises);
        });
    }
}
exports.GetUsersUsecase = GetUsersUsecase;
//# sourceMappingURL=get-users-usecase.js.map