<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
</style>
