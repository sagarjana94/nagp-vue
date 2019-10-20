import axios from 'axios';
import { UserLoginDetails, UserResponse, ArticleResponse, Profile, UserForUpdate, User } from './models';

export const conduitApi =  axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});

export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common['Autorization'] = `Token ${jwt}`;
}

export function clearJWT() {
    delete conduitApi.defaults.headers.common['Autorization'];
}

export async function loginUser(user: UserLoginDetails): Promise<UserResponse | undefined> {
    try {
        return (await conduitApi.post('/users/login', {
            user,
        })).data.user;
    } catch (e) {
        throw e;
    }
}

export async function getGlobalFeed(){
    const response = await conduitApi.get('/articles')
    return response.data as ArticleResponse;
}

export async function fetchProfile(username: string): Promise<Profile> {
    const response = await conduitApi.get(`/profiles/${username}`);
    return response.data.profile as Profile;
}

export async function updateUser(user: UserForUpdate){
    const response = await conduitApi.put('/user',user);
    return response.data as User;
}