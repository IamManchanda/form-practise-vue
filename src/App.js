/**
 * Vue Script
 */

import AppFullName from './components/fullname/AppFullName.vue';

export default {
  data() {
    return {
      userData: {
        fullName: 'Harry Manchanda',
        email: '',
        password: '',
        storeData: 'Yes'
      },
      isSubmitted: false
    };
  },
  components: { AppFullName }
};