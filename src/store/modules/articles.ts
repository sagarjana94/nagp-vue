import { Module, VuexModule, getModule, MutationAction } from "vuex-module-decorators";
import store from '@/store';
import { Article } from '../models';
import * as api from '@/store/api';
type FeedType = 'global' | 'user';
@Module({
    dynamic: true,
    namespaced: true,
    name: 'articles',
    store
})
class ArticlesModule extends VuexModule{
    feed: Article[] = [];

    @MutationAction({mutate: ['feed']})
    public async refreshFeed(feedType: FeedType){
        if(feedType === 'global'){
            const feed = (await api.getGlobalFeed()).articles;
            return { feed };
        } else {
            const feed = (await api.getGlobalFeed()).articles;
            return { feed };
        }
    }
}

export default getModule(ArticlesModule);