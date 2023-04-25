<script setup></script>
<template>
  <div class="cta">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur sed sunt repudiandae illum fugit iusto, expedita minus dolor officiis nam iure.
    </p>
    <button>Contact me</button>
  </div>
</template>

<style scoped lang="scss">
  .cta {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.3em;
    padding: 5em;

    h2 {
      line-height: 1;
      margin: 0;
    }
    p {
      margin: 0;
      // padding: 0 10em;
      text-align: center;
    }
    button {
      font-size: 18px;
      padding: 1em 5em;
      background-color: #58D68D;
      border: none;
      border-radius: 5px;
      color: #0e0e0e;
      border: 1px solid transparent;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 2em #58D68D);
      }

      &:active {
        background-color: #a9e5c2;
      }
    }
  }
</style>