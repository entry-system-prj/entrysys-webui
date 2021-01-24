<template>
  <div>
    <h2>登録者一覧</h2>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
      :search="search"
    >
      <template #top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Regist extends Vue {
  search = "";

  headers = [
    {
      text: "名前",
      value: "name",
      align: "start",
      sortable: false
    },
    {
      text: "サークル名",
      value: "club",
      sortable: true
    }
  ];
  items = [
    {
      name: "name01",
      club: "club A"
    },
    {
      name: "name02",
      club: "club A"
    },
    {
      name: "name03",
      club: "club B"
    }
  ];
}
</script>
