<template>
  <div id="cjc">
    <input type="text" v-model="seen" />
    <p
      v-bind:seen="seen"
      v-bind="{ a1: 1, a2: 2 }"
      v-if="seen == 'true' ? true : false"
      v-on:click="increment"
    >
      现在你看到我了
    </p>
    {{ rawHtml }}
    <span v-html="rawHtml"></span>
    <template>
      <div v-for="(item, index) in list" v-bind:key="item.id">
        {{ item }} ++ {{ index }}
      </div>
    </template>
    <div class="flex">我的第一个vue</div>
    <div>{{ fullName }}</div>
    <div>下面是老夫的路由</div>
    <div>
      <router-view></router-view>
    </div>
    {{ count }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      seen: true,
      rawHtml: "<h1>w</h1>",
      list: [
        { id: 1, name: "zs1" },
        { id: 2, name: "zs2" },
        { id: 3, name: "zs3" },
        { id: 4, name: "zs4" },
      ],
      firstName: "cjc",
      lastName: "madao",
    };
  },
  computed: {
    count: function () {
      console.log("调用：" + this.$store.state.count);
      return this.$store.state.count;
    },
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    //在方法里分发 vuex的 mutations和actions     在computed中分发vuex的state和getters
    ...mapMutations({
      increment: "increment",
    }),
    increment1: function () {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>