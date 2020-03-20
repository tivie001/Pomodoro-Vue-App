<template>
  <v-container grid-list-lg pa-0 ml-6 mt-3 mr-2 fluid>
    <v-layout wrap>
      <v-flex sm12 lg12 mb-3 pl-0 pr-4>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Task Name</th>
                <th class="text-left">Date Added</th>
                <th class="text-left">Timer Status</th>
                <th class="text-left"></th>
                <th class="text-left">Completed (# of Tasks)</th>
                <th class="text-left">Remove Task</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index"  style="height: 75px">
                    <td>{{ task.name }}</td>
                    <td>{{ task.dateAdded }}</td>
                    <td width="120">
                        <v-progress-circular
                            buffer-value="150"
                            :size="55"
                            :width="5"
                            :rotate="-90"
                            :value="task.time"
                            color="teal"
                        >
                            <span class="">{{ task.minutes }}</span>
                        </v-progress-circular>
                    </td>
                    <td>
                        <v-btn small fab dark color="green" v-if="!task.isRunning" v-on:click="playTimer(task.id)">
                            <v-icon>mdi-play</v-icon>
                        </v-btn>
                        <v-btn class="ml-3" fab small dark color="red" v-else v-on:click="pauseTimer(task.id)">
                            <v-icon>mdi-pause</v-icon>
                        </v-btn>
                        <v-btn class="ml-3" fab small dark color="orange" v-on:click="resetTimer(task.id)">
                            <v-icon>mdi-restore</v-icon>
                        </v-btn>
                    </td>
                    <td>{{ task.numOfTimers }}</td>
                  <td>
                    <v-btn small dark color="red" v-on:click="removeTask(task.id)">
                      Remove
                      <v-icon right>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>

    </v-layout>
    <p class="text-center" v-if="tasks.length === 0">No tasks have been entered. Click plus icon to start a task.</p>
  </v-container>
</template>

<script>
  export default {
    name: 'Table',
    data: () => ({
    }),
    created() {},
    // beforeDestroy () {
    //   clearInterval(this.interval)
    // },
    mounted () {
    },
    computed: {
        tasks(){
            return this.$store.state.tasks
        }
    },
    methods: {
        removeTask(taskId){
            this.$store.dispatch('removeTask', taskId);
        },
        playTimer(taskId){
            this.$store.dispatch('playTimer', taskId);
        },
        pauseTimer(taskId){
            this.$store.dispatch('pauseTimer', taskId);
        },
        resetTimer(taskId){
            this.$store.dispatch('resetTimer', taskId);
        }
    }
  }
</script>

<style>

</style>
