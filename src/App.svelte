<script>
  import Info from './components/Info.svelte';
  import SudokuGrid from './components/grid/SudokuGrid.svelte';

  import { grid } from './utils/stores';
  import { subscribe } from 'svelte/internal';

  const handleUpdateGrid = (e) => {
    
  }
</script>

<svelte:head>
  <title>Sudokai</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,300&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    background-color: #feffff;
    color: black;
  }

  .container {
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
    padding-top: 5%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    column-gap: 25px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .sudokuGrid {
    align-items: center;
    justify-content: center;
  }
</style>

<main class="container">
  <div class="grid">
    <div class="info">
      <Info on:updateGrid={handleUpdateGrid} />
    </div>
    <div class="sudokuGrid">
      <SudokuGrid />
    </div>
  </div>
</main>
