<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from './HomeChildren/ListContainer'
import TodayRecommend from './HomeChildren/TodayRecommend'
import Rank from './HomeChildren/Rank'
import Like from './HomeChildren/Like'
import Floor from './HomeChildren/Floor'
import Brand from './HomeChildren/Brand'
export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style>
</style>