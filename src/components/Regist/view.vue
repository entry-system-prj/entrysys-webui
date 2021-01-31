<template>
  <div>
    <h2>登録フォーム</h2>
    <v-form ref="form" lazy-validation>
      <v-select
        v-model="formData.club"
        :rules="formRules.club"
        :items="clubs"
        label="サークル名"
      />
      <v-text-field
        v-model="formData.name"
        :rules="formRules.name"
        :counter="15"
        label="名前"
      />
      <v-text-field
        v-model="formData.email"
        :rules="formRules.email"
        label="メールアドレス"
      />

      <div class="mt-4 d-flex justify-end">
        <v-btn @click="submit" color="primary" v-text="'登録'" />
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { rules } from "@/utils/rules";
import ky from "ky";

@Component
export default class Regist extends Vue {
  clubs = ["club A", "club B"];

  formRules = {
    club: [rules.isRequired],
    name: [rules.isRequired],
    email: [rules.isRequired, rules.isEmail]
  };

  formData = {
    club: "",
    name: "",
    email: ""
  };

  submit() {
    console.log("submit");
    (this.$refs.form as any).validate();
  }

  async created() {
    const response = await ky.get("http://localhost:3000/posts").json();
    console.log(response);
  }
}
</script>
