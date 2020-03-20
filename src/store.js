import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    getters: {},

    mutations: {
        addTask: (store, task) => {
            store.tasks.push(task);
        },
        removeTask: (store, taskId) => {
            const selectedTask = store.tasks[taskId - 1];
            store.tasks.splice(selectedTask, 1);
        },
        playTimer: (store, taskId) => {
            const selectedTask = store.tasks[taskId - 1];
            selectedTask.isRunning = true;
        },
        pauseTimer: (store, taskId) => {
            const selectedTask = store.tasks[taskId - 1];
            selectedTask.isRunning = false;
        },
        resetTimer: (store, taskId) => {
            const selectedTask = store.tasks[taskId - 1];
            selectedTask.isRunning = false;
            selectedTask.minutes = "25:00";
            selectedTask.time = 100;
            selectedTask.totalSeconds = 1500;
        }
    },

    //actions can be async action.commit('mutation')
    actions: {
        addTask({ commit }, task) {
            try {
                commit('addTask', task);
            } catch(e) {
                console.log(e);
            }
        },
        removeTask({ commit }, taskId) {
            commit('removeTask', taskId);
        },
        playTimer({ commit }, taskId) {
            commit('playTimer', taskId);
        },
        pauseTimer({ commit }, taskId) {
            commit('pauseTimer', taskId);
        },
        resetTimer({ commit }, taskId) {
            commit('resetTimer', taskId);
        },
    }
})