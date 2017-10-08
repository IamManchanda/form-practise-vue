<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-padding-y">
      <div class="cell medium-8 medium-offset-2">
        <form v-if="!isSubmitted">
          <div class="grid-x grid-margin-x">
            <div class="cell medium-12">
              <h2 class="separator-center">Register now!</h2>
            </div>
          </div>
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="grid-x grid-margin-x">
            <div class="cell medium-6">
              <label for="email">Email
                <input type="email" name="email" id="email" v-model="userData.email">
              </label>
            </div>
            <div class="cell medium-6">
              <label for="password">Password
                <input type="password" name="password" id="password" v-model="userData.password">
              </label>
            </div>
            <fieldset class="medium-12 cell">
              <legend>Store Data</legend>
              <input type="radio" name="storeData" value="Yes" id="storeDataYes" v-model="userData.storeData"><label for="storeDataYes">Yes</label>
              <input type="radio" name="storeData" value="No" id="storeDataNo" v-model="userData.storeData"><label for="storeDataNo">No</label>
            </fieldset>
            <div class="cell medium-12">
              <input type="submit" class="button primary" value="Submit" @click.prevent="isSubmitted = true">
            </div>
          </div>
        </form>
        <div class="card" v-else>
          <div class="card-divider">
            <h4>Thanks, your data was saved.</h4>
          </div>
          <div class="card-section">
            <p>Full Name: {{ userData.fullName }} </p>
            <p>Email: {{ userData.email }} </p>
            <p>Password: {{ userData.password }} </p>
            <p>Store in Database?: {{ userData.storeData }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss" src="./App.scss" scoped></style>
