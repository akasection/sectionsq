<template lang="pug">
  .sq-spawner
    SpawnItem(v-for="(item) in indexer" @imdone="spawnItem(item.key, item)" :key="item.index" :position="item.key" :anchor="anchor")
</template>

<script>
import SpawnItem from '~/components/SpawnItem';
import { timeWait, getRandomInt } from '~/func/shared';

export default {
  name: 'Spawner',
  components: {
    SpawnItem,
  },
  data: () => ({
    indexer: [],
    anchor: 50,
  }),
  async mounted() {
    // Create spawner system
    const bgCount = getRandomInt(30, 55);
    const mdCount = getRandomInt(15, 25);
    const fgCount = getRandomInt(5, 8);
    // console.log(bgCount, mdCount, fgCount);
    await timeWait(1300);
    // console.log('bgsd');
    this.spawnItems(this.indexer, fgCount, 'fg');
    this.spawnItems(this.indexer, mdCount, 'md');
    this.spawnItems(this.indexer, bgCount, 'bg');
  },
  methods: {
    async spawnItem(array, item) { // reuse item index
      const arr = this.indexer.filter(selected => selected.index !== item.index);
      this.indexer = arr;
      await this.$nextTick();
      await timeWait(100);
      this.indexer.push({
        key: item.key,
        index: item.index,
      });
    },
    async spawnItems(array, startCount, key) {
      if (startCount === 0) return;
      this.indexer.push({ key,
        index: `${Date.now()}${key}` });
      await timeWait(getRandomInt(250, 1000));
      return this.spawnItems(array, startCount - 1, key);
    }
  },

};
</script>

<style lang="stylus" scoped>
.sq-spawner
  position fixed
  width 100%
  height 100%
  transition transform 1110ms cubic-bezier(0.55, 0.01, 0.31, 0.96)

</style>
