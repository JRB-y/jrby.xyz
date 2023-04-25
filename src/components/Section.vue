<script setup>
  const props = defineProps({
    title: String,
    color: String,
  });

</script>
<template>
  <section>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #1515157e;
  margin-top: 1em;
  border-radius: 15px;

  h3 {
    margin: 0.5em 0 0.5em 0.5em;
    filter: drop-shadow(0 0 0.09em #b6d658);
  }
  padding: 1em 0em;
}
</style>