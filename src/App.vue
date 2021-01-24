<template>
  <v-app>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar app color="primary" dark v-bind="attrs" v-on="on">
          <v-app-bar-nav-icon />
          <v-toolbar-title>Menu</v-toolbar-title>
        </v-app-bar>
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.to">
          <v-list-item-title>
            <router-link :to="item.to" v-text="item.text" />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  items = [
    {
      to: "/regist",
      text: "登録フォーム"
    },
    {
      to: "/list",
      text: "登録者一覧"
    }
  ];
}
</script>
