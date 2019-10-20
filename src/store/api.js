import axios from 'axios';
export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});
export function setJWT(jwt) {
    conduitApi.defaults.headers.common['Autorization'] = `Token ${jwt}`;
}
export function clearJWT() {
    delete conduitApi.defaults.headers.common['Autorization'];
}
export async function loginUser(user) {
    try {
        return (await conduitApi.post('/users/login', {
            user,
        })).data.user;
    }
    catch (e) {
        throw e;
    }
}
export async function getGlobalFeed() {
    const response = await conduitApi.get('/articles');
    return response.data;
}
export async function fetchProfile(username) {
    const response = await conduitApi.get(`/profiles/${username}`);
    return response.data.profile;
}
export async function updateUser(user) {
    const response = await conduitApi.put('/user', user);
    return response.data;
}
//# sourceMappingURL=api.js.map