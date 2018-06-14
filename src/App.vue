<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu" mode="horizontal" router>
          <el-menu-item index="/author">Author</el-menu-item>
          <el-menu-item index="/article">Article</el-menu-item>
          <el-menu-item index="/relationship">Relationship</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <p id="footer">Copyright © 2018 Yuchen Cheng. All Rights Reserved.</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  color: lightgray;
  text-align: center;
  font-size: small;
}
</style>
