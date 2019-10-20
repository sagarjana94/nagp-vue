import * as tslib_1 from "tslib";
import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { loginUser, fetchProfile, updateUser, setJWT } from '../api';
let UsersModule = class UsersModule extends VuexModule {
    constructor() {
        super(...arguments);
        this.user = null;
        this.profile = null;
    }
    get username() {
        return this.user && this.user.username || null;
    }
    async login(loginUserDetails) {
        const user = await loginUser(loginUserDetails);
        if (user) {
            setJWT(user.user.token);
        }
        return { user };
    }
    async loadProfile(username) {
        const profile = await fetchProfile(username);
        return { profile };
    }
    async updateProfile(u) {
        const user = await updateUser(u);
        return { user };
    }
};
tslib_1.__decorate([
    MutationAction({ mutate: ['user'] })
], UsersModule.prototype, "login", null);
tslib_1.__decorate([
    MutationAction({ mutate: ['profile'] })
], UsersModule.prototype, "loadProfile", null);
tslib_1.__decorate([
    MutationAction({ mutate: ['user'] })
], UsersModule.prototype, "updateProfile", null);
UsersModule = tslib_1.__decorate([
    Module({
        namespaced: true,
        name: 'users',
        store,
        dynamic: true,
    })
], UsersModule);
export default getModule(UsersModule);
//# sourceMappingURL=users.js.map