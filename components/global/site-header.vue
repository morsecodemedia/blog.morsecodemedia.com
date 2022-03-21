<template>
  <header class="site-header">
    <h1>morsecodemedia blog</h1>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style lang="scss">
.site-header {
  padding: 25px 5% 5px;
  max-width: 992px;
  margin: 0 auto;
  position: relative;
  h1 {
    font-size: 24px;
    text-transform: uppercase;
  }
}
</style>
