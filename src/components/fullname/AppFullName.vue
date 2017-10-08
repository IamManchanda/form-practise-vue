<template>
  <div class="grid-x grid-margin-x">
    <div class="cell medium-6">
      <label for="firstName">First Name
        <input type="text" name="firstName" id="firstName" :value="firstName" @input="nameChanged(true, $event)">
      </label>
    </div>
    <div class="cell medium-6">
      <label for="lastName">Last Name
        <input type="text" name="lastName" id="lastName" :value="lastName" @input="nameChanged(false, $event)">
      </label>
    </div>
  </div>
</template>

<script src="./AppFullName.js"></script>
<style lang="scss" scoped src="./AppFullName.scss"></style>