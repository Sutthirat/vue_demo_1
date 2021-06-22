<template>
  <div id="demo12">
    <h1 ref="title">Waiting for change by Ref</h1>
    <input ref="input1" type="text" placeholder="This will be focused automatically">
  </div>
</template>

<script>
export default {
  name: "Demo12",
  mounted() {
    this.$refs["title"].textContent = "CodeMobiles change Ref";
    this.$refs["input1"].focus();
  }
};
</script>

<style scoped>

</style>