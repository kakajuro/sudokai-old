<script>
  import Cell from './Cell.svelte';
  import './gridStyles.css';
</script>

<style>
  .grid {
    display: grid;
    width: 675px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
</style>

<div class="grid">
  <div class="tl">
    <Cell />
  </div>
  <div class="tm">
    <Cell />
  </div>
  <div class="tr">
    <Cell />
  </div>
  <div class="ml">
    <Cell />
  </div>
  <div class="mm">
    <Cell />
  </div>
  <div class="mr">
    <Cell />
  </div>
  <div class="bl">
    <Cell />
  </div>
  <div class="bm">
    <Cell />
  </div>
  <div class="br">
    <Cell />
  </div>
</div>