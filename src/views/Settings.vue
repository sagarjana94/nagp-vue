<template>
    <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Profile</h1>

        <form>
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="updateProfile()">
                Update Profile
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { UserForUpdate } from '@/store/models';
import users from '@/store/modules/users';

@Component
export default class Settings extends Vue {
   user: UserForUpdate = {};

  created() {
    this.user = users.user || {};
  }
  public async updateProfile() {
    await users.updateProfile({
      email: this.user.email,
      bio: this.user.bio,
      image: this.user.image,
      password: this.user.password,
      username: this.user.username
    });
  }
}
</script>