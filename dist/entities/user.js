"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    static create(data) {
        const instance = new User();
        instance.username = data.login;
        instance.avatar = data.avatar_url;
        instance.url = data.url;
        return instance;
    }
    static createFromResponse(response) {
        var _a;
        const users = ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items) || [];
        return users.map(this.create);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map