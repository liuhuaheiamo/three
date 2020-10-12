<template>
  <div id="Teacher">
    <h2>这是老师</h2>
    <ul>
      <li v-for="item in Teacher" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Teacher: [
        {
          id: 1,
          name: "张三",
          age: 10,
        },
        {
          id: 2,
          name: "张三2",
          age: 11,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less">
</style>