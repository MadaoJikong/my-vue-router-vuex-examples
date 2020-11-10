<template>
  <div>
    <div>我是blog</div>
    <div>
      {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>