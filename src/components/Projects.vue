<script setup>
import { reactive } from 'vue';
  const projects = reactive([
    {
      title: 'GPT SMS',
      link: 'https://gptsms.online',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maiores! Placeat molestias',
      type: '#service',
      icons: [
        'logo--nodejs.png', 'logo--gpt.png', 'logo--vonage.png'
      ]
    },
    {
      title: 'BeetGPT',
      link: 'https://github.com/JRB-y/beetgpt',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maiores! Placeat molestias',
      type: '#app',
      icons: [
        'logo--nodejs.png', 'logo--gpt.png',
      ]
    },
    {
      title: 'GPTest',
      link: 'https://github.com/JRB-y/gptest',
      desc: 'The GPTest VS Code Extension allows you to test your code using OpenAI\'s GPT-3 language model',
      type: '#vscode ext',
      icons: [
        'logo--nodejs.png', 'logo--gpt.png','logo--vscode.png',
      ]
    },
    {
      title: 'OS Monitor',
      link: 'https://github.com/JRB-y/monitor-os-module',
      desc: 'Monitor Nodejs \'os\' module with Electron',
      type: '#desktop',
      icons: [
        'logo--nodejs.png', 'logo--electron.png'
      ]
    },
    {
      title: 'Piggy Bank',
      link: 'https://github.com/JRB-y/piggy-bank',
      desc: 'A PiggyBank smart contract',
      type: '#smart-contract',
      icons: [
        'logo--eth.png'
      ]
    },
    {
      title: 'Degen Bud discord\'s bot!',
      link: 'https://github.com/JRB-y/dub-bot',
      desc: 'DubBot simulate the process of cannabis cultivation You can buy, feed, trade and harvest plants.',
      type: '#discord-bot',
      icons: [
        'logo--nodejs.png', 'logo--discord.png',
      ]
    },
    {
      title: 'Solana Roulette',
      link: 'https://github.com/JRB-y/solana-roulette',
      desc: 'DubBot simulate the process of cannabis cultivation You can buy, feed, trade and harvest plants.',
      type: '#cli',
      icons: [
        'logo--nodejs.png', 'logo--solana.png',
      ]
    },
    {
      title: 'Chrome Github Repository Size',
      link: 'https://github.com/JRB-y/chrome-github-size',
      desc: 'Get the size of public Github repositories.',
      type: '#bext',
      icons: [
        'logo--nodejs.png', 'logo--chrome.png',
      ]
    },
  ])
</script>
<template>
  <ul class="projects">
    <li class="project" v-for="project in projects" :key="project.title">
      <a :href="project.link" :alt="project.title" target="_blank" class="project__title">{{ project.title }}</a>
      <!-- <div class="project__type">{{ project.type }}</div> -->
      <p class="project__desc">
        {{project.desc}}
      </p>
      <div class="with">
        <img v-for="icon in project.icons" :key="project.type + '' +  icon" :src="icon" alt="" width="25px">
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.projects {
  font-size: 0.8em;
  padding: 0 1.5em;
  .project {
    padding: 0.5em 0;
    display: flex;
    &__title {
      width: fit-content;
      font-size: 1.5em;
    }
    &__url {
      width: fit-content;
    }
    &__desc {
      width: fit-content;
      padding: 0;
      margin: 0;
      font-weight: lighter;
    }
    &__type {
      font-size: 1em;
      font-weight: 400;
      color: #00fffe;
    }

    .with {
      display: flex;
      gap: 0.3em;
      margin-top: 0.5em;
      img {
        background-color: white;
        border-radius: 50%;
        // border: 1px solid white;
        // mix-blend-mode: multiply;
      }
    }
  }
}

</style>