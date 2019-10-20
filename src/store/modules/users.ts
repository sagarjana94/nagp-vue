import {VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { User, Profile, UserLoginDetails, UserForUpdate } from '../models';
import { loginUser, fetchProfile, updateUser, setJWT } from '../api';

@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true,
})
class UsersModule extends VuexModule {
    public user: User | null = null;
    public profile: Profile | null = null;

    get username() {
        return this.user && this.user.username || null;
    }

    @MutationAction({mutate: ['user']})
    public async login(loginUserDetails: UserLoginDetails) {
        const user = await loginUser(loginUserDetails);
        if(user){
            setJWT(user.user.token);
        }
        return { user };
    }

    @MutationAction({mutate: ['profile']})
    public async loadProfile(username: string) {
        const profile = await fetchProfile(username);
        return { profile };
    }

    @MutationAction({mutate: ['user']})
    public async updateProfile(u: UserForUpdate) {
        const user = await updateUser(u);
        return { user };
    }
}

export default getModule(UsersModule);
