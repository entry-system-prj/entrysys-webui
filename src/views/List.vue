<template>
  <div class="regist">
    <list-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListView from "@/components/List/view.vue";

@Component({
  components: {
    ListView
  }
})
export default class List extends Vue {}
</script>
