<template>
  <div id="demo10">
    <h1>Lifecycle Hooks</h1>
    <span>{{counter}}</span>
    <br>
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    // ***
    console.log("created");
  },
  mounted() {
    // ***
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    // ***
    console.log("updated");
  },
  beforeDestroy() {
    // ***
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style scoped>

</style>