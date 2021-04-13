<script>
  import { createEventDispatcher } from 'svelte';

  import Info from './components/Info.svelte';
  import SudokuGrid from './components/grid/SudokuGrid.svelte';

  import { getSudoku } from './utils/apiCall';

  import { grid } from './utils/stores';
  import { solvedGrid } from './utils/stores';

  var renderGrid = true;

  $: grid.subscribe(val => {
    if (Object.keys(val).length === 0 && val.constructor === Object) {
      renderGrid = false;
    }
  });

  const dispatch = createEventDispatcher();

  const handleUpdateGrid = () => {
    getSudoku();
    renderGrid = true;
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


{#if renderGrid}
  <main class="container">
    <div class="grid">
      <div class="info">
        <Info on:generateGrid={handleUpdateGrid}/>
      </div>
      <div class="sudokuGrid">
        <SudokuGrid />
      </div>
    </div>
  </main>
{:else if !renderGrid}
<main class="container">
  <div class="grid">
    <div class="info">
      <Info on:generateGrid={handleUpdateGrid}/>
    </div>
    <!-- <div class="sudokuGrid">
      <SudokuGrid />
    </div> -->
  </div>
</main>
{/if}
