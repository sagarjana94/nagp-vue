import * as tslib_1 from "tslib";
import { Module, VuexModule, getModule, MutationAction } from "vuex-module-decorators";
import store from '@/store';
import * as api from '@/store/api';
let ArticlesModule = class ArticlesModule extends VuexModule {
    constructor() {
        super(...arguments);
        this.feed = [];
    }
    async refreshFeed(feedType) {
        if (feedType === 'global') {
            const feed = (await api.getGlobalFeed()).articles;
            return { feed };
        }
        else {
            const feed = (await api.getGlobalFeed()).articles;
            return { feed };
        }
    }
};
tslib_1.__decorate([
    MutationAction({ mutate: ['feed'] })
], ArticlesModule.prototype, "refreshFeed", null);
ArticlesModule = tslib_1.__decorate([
    Module({
        dynamic: true,
        namespaced: true,
        name: 'articles',
        store
    })
], ArticlesModule);
export default getModule(ArticlesModule);
//# sourceMappingURL=articles.js.map