import Vue from 'vue';
import Vuex from 'vuex';
//import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions,
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news;
    //     },
    //     SET_ASK(state, ask) {
    //         state.ask = ask;
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     },
    // },
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 context.commit('SET_NEWS', response.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList()
    //             .then(({ data }) => {
    //                 console.log(data);
    //                 commit('SET_ASK', data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then(({ data }) => {
    //                 commit('SET_JOBS', data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     }
    // },
});