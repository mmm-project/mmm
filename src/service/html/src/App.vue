<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="drawer == 1"
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-layout
          column
          align-center
          style="box-shadow:0 1px 2px -1px rgba(0,0,0,.2),  0 1px 2px 0 rgba(0,0,0,.12);"
        >
          <img src="@/assets/mmm.png" :width="['0','50px','120px'][drawer]">
        </v-layout>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left>
      <!-- <v-toolbar-side-icon @click.stop="switchDrawer()"></v-toolbar-side-icon> -->
      <v-btn large icon @click.stop="switchDrawer()">
        <v-icon large v-html="['vertical_split','chevron_right','chevron_left'][drawer]"></v-icon>
      </v-btn>
      <v-toolbar-title>Magicmind MicroService Management 微服务管理中心</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-layout column style="min-height: 100%;">
        <router-view></router-view>
        <v-spacer></v-spacer>
        <v-footer class="pr-5 caption">
          <v-spacer></v-spacer>
          <span>magicmind &copy; 2017</span>
        </v-footer>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },

  data() {
    return {
      clipped: true,
      drawer: 1,
      items: [
        {
          icon: 'home',
          title: '首页',
        },
      ],
    };
  },
  methods: {
    switchDrawer() {
      this.drawer++;
      if (this.drawer > 2) {
        this.drawer = 0;
      }
    },
  },
});
</script>
