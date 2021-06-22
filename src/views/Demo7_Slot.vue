<template>
  <div id="demo7">
    <Clock>
      <span style="color: red;">เวลาปัจจุบัน</span>
    </Clock>
    <Clock>
      <span style="color: green;">Current Time</span>
    </Clock>
    <Clock>
    <!-- Using fallback (default) content-->
    </Clock>
    <Clock>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
      <spans style="color: brown">เวลาปัจจุบัน</spans>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: {
    Clock
  }
};
</script>

<style scoped>

</style>