<template>
  <v-app id="app">
<!--    <v-navigation-drawer-->
<!--            v-model="drawer"-->
<!--            app-->
<!--            clipped-->
<!--    >-->
<!--      <v-list dense>-->
<!--        <v-list-item>-->
<!--          <v-list-item-action>-->
<!--            <v-icon>dashboard</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Dashboard</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--        <v-list-item>-->
<!--          <v-list-item-action>-->
<!--            <v-icon>settings</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Settings</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <v-app-bar app clipped-left id="navbar">
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <v-toolbar-title>Pomodoro App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex shrink>
            <v-tooltip right>
              <template>

              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template>
              </template>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Tyler Ivie | DGM 3780</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Header from './components/Header';

export default {
  name: 'App',

  components: {
    // Header,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
<style>
    #app {
        background: #2F384B;
    }
    #navbar {
        background: #2F384B;
        color: white;
    }
</style>
