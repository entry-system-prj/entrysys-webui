<template>
  <div class="settings">
    <h2>マイページ</h2>
    <v-card outlined>
      <v-card-title v-text="'基本情報'" />
      <v-card-text>
        <v-form readonly>
          <v-text-field v-model="settings.id" label="id" />
          <v-text-field v-model="settings.name" :counter="15" label="名前" />
          <v-text-field
            v-model="settings.email"
            :formRules="formRules.email"
            label="メールアドレス"
          />
          <v-text-field
            v-model="settings.password"
            :counter="30"
            label="パスワード"
          />
          <v-text-field v-model="settings.partnerID" label="パートナーID" />
          <v-text-field v-model="settings.clubID" label="サークルID" />

          <div class="mt-4 d-flex justify-end">
            <v-btn @click="edit" color="primary" v-text="'編集'" />
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card outlined class="mt-4">
      <v-card-title v-text="'パートナー情報'" />
      <v-card-text>
        <v-form readonly>
          <v-text-field v-model="settings.partnerID" label="パートナーID" />
          <v-text-field v-model="partnerData.name" :counter="15" label="名前" />
          <v-text-field v-model="partnerData.clubID" label="サークルID" />

          <div class="mt-4 d-flex justify-end">
            <v-btn @click="edit" color="primary" v-text="'編集'" />
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card outlined class="mt-4">
      <v-card-title v-text="'サークル情報'" />
      <v-card-text>
        <v-form readonly>
          <v-text-field v-model="settings.clubID" label="サークルID" />
          <v-text-field v-model="clubData.name" label="サークル名" />

          <div class="mt-4 d-flex justify-end">
            <v-btn @click="edit" color="primary" v-text="'編集'" />
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ky from "ky";
import { rules } from "@/utils/rules";

interface Setting {
  id: string;
  name: string;
  email: string;
  password: string;
  partnerID: string;
  clubID: string;
}

interface Users {
  id: string;
  name: string;
  clubID: string;
}

interface Clubs {
  id: string;
  name: string;
}

@Component
export default class Settings extends Vue {
  settings: Setting | null = null;
  users: Users[] | null = null;
  clubs: Clubs[] | null = null;

  formRules = {
    email: [rules.isRequired, rules.isEmail]
  };

  get partnerData(): null | Users {
    if (!this.settings || !this.users) {
      return null;
    }
    const partnerID = this.settings.partnerID;
    const partner = this.users.find(user => {
      if (user.id === partnerID) {
        return user;
      }
    });

    return partner || null;
  }

  get clubData(): null | Clubs {
    if (!this.settings || !this.clubs) {
      return null;
    }
    const clubID = this.settings.clubID;
    const club = this.clubs.find(club => {
      if (club.id === clubID) {
        return club;
      }
    });

    return club || null;
  }

  async created() {
    const response: { settings: Setting } = await ky.get("/api/account").json();
    this.settings = response.settings;
    this.users = await ky.get("/api/users").json();
    this.clubs = await ky.get("/api/clubs").json();
  }
}
</script>
