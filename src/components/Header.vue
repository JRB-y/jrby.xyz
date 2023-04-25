<script setup></script>
<template>
  <header>
    <div class="logo">
      <div class="emoji">👋</div>
      <div>
        <h1>Hi, I'm Jrb</h1>
        <div class="subhead">
          <h2>Full-Stack Web Developer,</h2>
          <h2>Open Source Enthusiast</h2>
          <h2>& Consultant</h2>
        </div>
      </div>
    </div>
    <div>
      <a href="">
        <img src="github.svg" alt="github" width="50px" />
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 84.8px; */
  background: rgb(41 44 42);
  border-radius: 5px;
  padding: 1em 1.5em;

  h1, .emoji {
    font-size: 1.5em;
    line-height: 1.1;
    margin: 0;
    filter: drop-shadow(0 0 2em #f7df1eaa);
  }

  h2 {
    font-size: 0.9em;
    margin: 0;
    line-height: 2;
    font-weight: bold;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5em;

    h2 {
      padding: 0;
      margin: 0;
      line-height: 1.5;
    }
    .subhead {
      display: flex;
      flex-direction: column;
    }
  }
  svg {
    width: 50px;
  }
}
</style>