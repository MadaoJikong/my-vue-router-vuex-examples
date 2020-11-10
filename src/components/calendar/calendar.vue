<template>
  <div>
    <div>我是calendar</div>
    <div>{{ this.$store.getters.countPlusCount }}</div>
    <div>{{ countPlusCount }}</div>
    <div>{{ countPlusLocalState }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Calendar",
  data() {
    return { localCount: 2 };
  },
  computed: {
    ...mapState({
      countPlusLocalState: function (state) {
        return state.count + this.localCount;
      },
    }),
    ...mapGetters({
      countPlusCount: "countPlusCount",
    }),
  },
};
</script>