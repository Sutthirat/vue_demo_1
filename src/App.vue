<template>
  <div id="app">
    <Header />
    <Content/>
    <Footer @onClock="onClock" title="Copyright 2021" color="pink" />
    <span class="clock">{{ time }}</span>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import moment from "moment";
import Content from "./components/layout/Content.vue";

export default {
  name: "app",
  methods: {
    onClock(value) {
      // this.time = value
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>

<style scoped>
  .clock {
    font-size: 12px;
  }
</style>
