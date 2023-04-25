<script setup>
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
import GitActivities from './components/GitActivities.vue';
import CTA from './components/CTA.vue';
import Projects from './components/Projects.vue';
import Section from './components/Section.vue';
</script>

<template>
  <div id="app">

    <Header />
    <main>
      <Section title="🐙 Last 30 Github activities" color="">
        <GitActivities />
      </Section>

      <Section title="⚔️ Skills" color="">
        <Skills />
      </Section>

      <!-- <CTA /> -->


      <Section title="📜 Projects" color="">
        <Projects />
      </Section>

    </main>

  </div>
</template>
