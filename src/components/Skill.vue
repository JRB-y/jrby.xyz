<script setup>
  defineProps({
    skill: Object,
  });
</script>
<template>
  <div class="skill">
    <details>
      <summary><h4 class="skill-title">{{ skill.title }}</h4></summary>
      <div class="indicator" v-for="child in skill.children" :key="child.title">

        <span class="title">{{ child.title }} </span>

          <div v-for="subChild in child.children" class="child-sub">
            <span class="subtitle">{{ subChild.title }} </span>
            <progress :value="subChild.value" max="100" class="progress"></progress>
            <span class="value">({{subChild.value}}%)</span>
          </div>

      </div>
    </details>
</div>
</template>

<style scoped lang="scss">
.skill {
  padding: 1em;
  background: #282828;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #58d68c4b;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }

  details summary {
    list-style-type: '';
    display: flex;
  }
  summary:before {
    width: 1.5em;
    height: 1.5em;
    font-size: 1.5em;
    content: "⬇️";
  }
  h4 {
    font-size: 1.2em;
    color: #c2c2c2;
    margin-top: 0em;
    margin-bottom: 0.5em;
  }
  .indicator {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;


    .title {
      font-weight: bold;
      font-size: large;
      text-transform: uppercase;
      color: #58D68D;
    }

    .child-sub {
      display: flex;
      gap: 1em;
      .subtitle {
        flex: 0.3;
      }
      .progress {
        accent-color: #58D68D;
        height: 25px;
        flex: 1;
        filter: drop-shadow(0 0 0.1em #58D68D);
  
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  
}
</style>
