<template>
  <div class="regist">
    <regist-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegistView from "@/components/Regist/view.vue";

@Component({
  components: {
    RegistView
  }
})
export default class Regist extends Vue {}
</script>
