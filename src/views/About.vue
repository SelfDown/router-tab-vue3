<template>
  <div>About<input v-model="test"/></div>
</template>
<script>
export default {
  name:"aboutPage",
  data(){
    return {
      test:"test"
    }
  },
  created() {
    console.log("about created")
  }

}
</script>