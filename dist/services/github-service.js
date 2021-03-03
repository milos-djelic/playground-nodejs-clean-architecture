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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const axios_1 = __importDefault(require("axios"));
const query_params_1 = require("../entities/query-params");
const BASE_QUERY_URL = 'https://api.github.com/search/users?per_page=10&q=';
class GithubService {
    getUsersBy(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            if (queryParams[query_params_1.QUERY_PARAMS.LANGUAGE]) {
                const url = `${BASE_QUERY_URL}language:${queryParams[query_params_1.QUERY_PARAMS.LANGUAGE]}`;
                const config = {
                    headers: {
                        Accept: 'application/vnd.github.v3+json'
                    }
                };
                return yield axios_1.default.get(url, config);
            }
            throw new Error(`Query parameters: ${JSON.stringify(queryParams)} not valid.`);
        });
    }
}
exports.GithubService = GithubService;
//# sourceMappingURL=github-service.js.map