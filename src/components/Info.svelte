<script>
  import Spacer from './Spacer.svelte';
</script>

<style>
  h1, h2, h3, h4, ul, p {
    margin: 0;
  }

  h4 {
    width: 300px;
  }

  main {
    padding-left: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
</style>

<main>
  <h1>Rules:</h1>
  <Spacer height={5} width={1}/>
  <h4>Fill the grid but make sure 2 numbers cannot be in the same 3x3 box, row or column.</h4>
</main>
