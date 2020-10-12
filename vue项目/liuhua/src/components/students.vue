<template>
  <div id="students">
    <h2>这是学生</h2>
    <ul>
      <li v-for="item in students" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [
        {
          id: 1,
          name: "lisi",
          age: 10,
        },
        {
          id: 2,
          name: "lisi2",
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