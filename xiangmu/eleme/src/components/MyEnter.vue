<template>
    <section>
      <nav class="nav navbar-fixed-top enter1">
        <router-link :to="{path: '/mycity'}" class="glyphicon glyphicon-chevron-left"></router-link>
        <span>密码登录</span>
      </nav>
      <nav class="enter2">
        <input type="text">
      </nav>
    </section>
</template>

<script>
    export default {
        name: "MyEnter"
    }
</script>

<style scoped>
  section {
    width: 100%;
  }
.enter1 {
  background-color: #3190E8;
  padding: 0.1rem 0.15rem;
  color: white;
  font-size: 0.2rem;
}
.enter1>a {
  color: white;
}
  .enter1>span {
    margin-left: 1.1rem;
  }
  .enter2 {
    margin-top: 0.6rem;
  }
  input {
    width: 100%;
    height: 0.45rem;
  }
</style>
