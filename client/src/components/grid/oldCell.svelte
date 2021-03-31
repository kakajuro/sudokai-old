<script>
  import './cellStyles.css';

  let tlc = 0;
  let tmc = 0;
  let trc = 0;

  let mlc = 0;
  let mmc = 0;
  let mrc = 0;

  let blc = 0;
  let bmc = 0;
  let brc = 0;
</script>

<style>
  .cell {
    width: 225px;
    display: grid;
    grid-template-columns: repeat(3, 75px);
    grid-template-rows: repeat(3, 75px);
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
</style>

<div class="cell">
  <div class="number tlc">
    <div>
      <input bind:value={tlc}>
    </div>
  </div>
  <div class="number tmc">
    <div>
      <input bind:value={tmc}>
    </div>
  </div>
  <div class="number trc">
    <div>
      <input bind:value={trc}>
    </div>
  </div>
  <div class="number mlc">
    <div>
      <input bind:value={mlc}>
    </div>
  </div>
  <div class="number mmc">
    <div>
      <input bind:value={mmc}>
    </div>
  </div>
  <div class="number mrc">
    <div>
      <input bind:value={mrc}>
    </div>
  </div>
  <div class="number blc">
    <div>
      <input bind:value={blc}>
    </div>
  </div>
  <div class="number bmc">
    <div>
      <input bind:value={bmc}>
    </div>
  </div>
  <div class="number brc">
    <div>
      <input bind:value={brc}>
    </div>
  </div>
</div>