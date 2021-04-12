<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const updateGrid = () => {
    dispatch('generateGrid');
  }

</script>

<style>
  h1, h4 {
    margin: 0;
  }

  h4 {
    width: 300px;
  }

  main {
    margin: 0 0;
    padding: 0 0;
  }

  .title {
    font-size: 50px;
    padding-bottom: 25px;
  }

  .btn {
    width: 100px;
    
    padding: 0.5rem 1rem;
  }

  .section {
    padding-top: 25px;
  }
</style>

<main>
  <h1 class="title">Sudoku</h1>
  <h1>Rules:</h1>
  <h4>Fill the grid but make sure 2 numbers cannot be in the same 3x3 box, row or column.</h4>
  <div class="section"></div>
  <button class="btn" on:click={updateGrid}>Generate</button>
</main>
