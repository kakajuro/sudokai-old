<script>
  import './cellStyles.css';

  export let square;
  
  let tlc = { val: square[0], isLocked: false };
  let tmc = { val: square[1], isLocked: false };
  let trc = { val: square[2], isLocked: false };
  let mlc = { val: square[3], isLocked: false };
  let mmc = { val: square[4], isLocked: false };
  let mrc = { val: square[5], isLocked: false };
  let blc = { val: square[6], isLocked: false };
  let bmc = { val: square[7], isLocked: false };
  let brc = { val: square[8], isLocked: false };

  let boxes =  [tlc, tmc, trc, mlc, mmc, mrc, blc, bmc, brc];

  boxes.forEach(box => {
    if (box.val != 0) {
      box.isLocked = true;
    }
  });

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g,'');
  }
  
</script>

<style>
  input:disabled {
    color: #000000;
    background-color: #ebebeb9b;
  }

  .cell {
    width: 225px;
    display: grid;
    grid-template-columns: repeat(3, 75px);
    grid-template-rows: repeat(3, 75px);
  }
</style>

<div class="cell">
  <input type=text maxlength="1" disabled={tlc.isLocked} class="inputs tlc" bind:value={tlc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={tmc.isLocked} class="inputs tmc" bind:value={tmc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={trc.isLocked} class="inputs trc" bind:value={trc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mlc.isLocked} class="inputs mlc" bind:value={mlc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mmc.isLocked} class="inputs mmc" bind:value={mmc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={mrc.isLocked} class="inputs mrc" bind:value={mrc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={blc.isLocked} class="inputs blc" bind:value={blc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={bmc.isLocked} class="inputs bmc" bind:value={bmc.val} on:input={handleInput}/>
  <input type=text maxlength="1" disabled={brc.isLocked} class="inputs brc" bind:value={brc.val} on:input={handleInput}/>
</div>