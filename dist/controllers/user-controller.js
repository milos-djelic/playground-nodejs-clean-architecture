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
exports.UserController = void 0;
const get_users_usecase_1 = require("../usecases/get-users-usecase");
class UserController {
    constructor(githubService) {
        this.githubService = githubService;
        this.getUsersByLanguage = (request, responseToolkit) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const language = (_a = request.query) === null || _a === void 0 ? void 0 : _a.language;
            if (!language) {
                throw new Error('No language passed');
            }
            const users = yield this.getUsersUsecase.execute({ language });
            // const presentedUsers = userPresenter.present(users);
            return responseToolkit.response(users).code(200);
        });
        this.getUsersUsecase = new get_users_usecase_1.GetUsersUsecase(githubService);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map