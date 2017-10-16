<template>
  <div class="user">
    <button @click="back">返回</button>
    <p>{{user}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'user',
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      user: state => state.user.userInfo
    })
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>

</style>
