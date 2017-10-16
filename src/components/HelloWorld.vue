<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="#">
      <label for="name">name: <input id="name" type="text" v-model="name"></label>
      <label for="title">title: <input id="title" type="text" v-model="title"></label>
      <label for="idcard">idcard: <input id="idcard" type="text" v-model="idcard"></label>
    </form>
    <p @click="saveInfo">点击保存数据跳转页面</p>
    <router-view></router-view>
  </div>
</template>

<script>
// import http from '../utils/http'
import api from '@/api';
import * as types from '@/store/mutationTypes.js';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'hello word',
      name: '',
      title: '',
      idcard: ''
    };
  },
  mounted() {
    this.initData();
    this.getConfig();
  },
  methods: {
    async initData() {
      let result;
      try {
        let params = {};
        result = await api.user.initData(params);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
      if (result.data.success) {
        this.msg = result.data.data.title;
      }
    },
    async getConfig() {
      let result;
      try {
        let params = {};
        result = await api.config.getConfig(params);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    },
    saveInfo() {
      let obj = {
        title: this.title,
        name: this.name,
        idcard: this.idcard
      };
      this.$store.commit(types.SAVE_USER_INFO, obj); // 保存数据到store
      this.$router.push('/user');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  cursor: pointer;
}
</style>
