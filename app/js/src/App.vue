<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="router-link-active" class="nav-link" :to="{ name: 'Home' }" exact>
            <img class="logo" src="./assets/build-a-bot-logo.png">Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="router-link-active" class="nav-link" :to="{ name: 'Build' }" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link active-class="router-link-active" class="nav-link" :to="{ name: 'Cart' }" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside>
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('robots', ['cart']),
  },
};
</script>

<style>

body{
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
  }

</style>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
  aside {
    padding: 30px;
    background-color: #aaa;
    width: 100px;
    min-height: 300px;
  }
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
