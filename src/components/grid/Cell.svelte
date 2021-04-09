<script>
  import { useEffect } from '../../utils/hooks';

  import './cellStyles.css';

  export let square;

  useEffect(() => {
    console.log(sqaure);
  }, () => []);

  let tlc = square[0];
  let tmc = square[1];
  let trc = square[2];
  let mlc = square[3];
  let mmc = square[4];
  let mrc = square[5];
  let blc = square[6];
  let bmc = square[7];
  let brc = square[8];

  let tlcLocked = false;
  let tmcLocked = false;
  let trcLocked = false;
  let mlcLocked = false;
  let mmcLocked = false;
  let mrcLocked = false;
  let blcLocked = false;
  let bmcLocked = false;
  let brcLocked = false;

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g,'');
  }
  
</script>

<style>
  .cell {
    width: 225px;
    display: grid;
    grid-template-columns: repeat(3, 75px);
    grid-template-rows: repeat(3, 75px);
  }
</style>

<div class="cell">
  <input type=text maxlength="1" disabled={tlcLocked} class="inputs tlc" bind:value={tlc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={tmcLocked} class="inputs tmc" bind:value={tmc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={trcLocked} class="inputs trc" bind:value={trc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mlcLocked} class="inputs mlc" bind:value={mlc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mmcLocked} class="inputs mmc" bind:value={mmc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mrcLocked} class="inputs mrc" bind:value={mrc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={blcLocked} class="inputs blc" bind:value={blc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={bmcLocked} class="inputs bmc" bind:value={bmc} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={brcLocked} class="inputs brc" bind:value={brc} on:input={handleInput}/>
</div>