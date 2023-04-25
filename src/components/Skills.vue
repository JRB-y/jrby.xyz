<script setup>
  import { reactive } from 'vue';
  import Skill from './Skill.vue';
  const skills = reactive([
    {
      title: 'Web 2',
      children: [
        {
          title: 'Backend',
          value: 90,
          children: [
            { title: 'Express', value: 89 },
            { title: 'Nestjs', value: 75 },
            { title: 'Koa', value: 65 },
          ]
        },
        {
          title: 'Frontend',
          value: 80,
          children: [
            { title: 'Vue', value: 89 },
            { title: 'React', value: 60 },
            { title: 'Vite', value: 80 },
            { title: 'Webpack', value: 80 },
          ]
        },
        {
          title: 'SSR',
          value: 80,
          children: [
            { title: 'Nuxt', value: 89 },
            { title: 'Quasar', value: 80 },
          ]
        },
        {
          title: 'Databases',
          value: 80,
          children: [
            { title: 'MySQL', value: 85 },
            { title: 'Postgres', value: 80 },
            { title: 'GraphQL', value: 75 },
            { title: 'Supabase', value: 75 },
            { title: 'RLS', value: 60 },
          ]
        },
        {
          title: 'OTHERS',
          value: 80,
          children: [
            { title: 'openAI', value: 50 },
            { title: 'Discord Bots', value: 70 },
            { title: 'VSC Ex', value: 70 },
            { title: 'Bex', value: 70 },
          ]
        },
      ]
    },
    {
      title: 'Web 3',
      children: [
        {
          title: 'EVM',
          value: 90,
          children: [
            { title: 'Solidity', value: 50 },
            { title: 'Hardhat', value: 45 },
            { title: 'eth.js', value: 60 },
          ]
        },
        {
          title: 'Solana',
          value: 80,
          children: [
            { title: 'Rust', value: 30 },
            { title: 'solana.js', value: 50 },
          ]
        },
      ]
    }
  ])
</script>
<template>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam suscipit provident voluptate totam, ipsam modi perspiciatis.
  </p>
  <div>
    <Skill  v-for="skill in skills" :key="skill.title" :skill="skill" />
  </div>
</template>

<style scoped lang="scss">
  p {
    padding: 0 1em;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0 2em;
  }
</style>