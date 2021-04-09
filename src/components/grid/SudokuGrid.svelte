<script>
  import Cell from './Cell.svelte';
  import './gridStyles.css';

  let r1 = [0, 7, 0, 0, 0, 0, 0, 4, 0]
  let r2 = [0, 0, 0, 0, 0, 7, 0, 0, 9]
  let r3 = [4, 5, 9, 1, 3, 0, 0, 0, 0]
  let r4 = [0, 1, 4, 3, 0, 0, 0, 9, 0]
  let r5 = [3, 6, 0, 8, 0, 0, 4, 0, 0]
  let r6 = [0, 0, 5, 0, 0, 4, 3, 0, 6]
  let r7 = [5, 3, 0, 0, 0, 2, 0, 7, 4]
  let r8 = [0, 0, 0, 0, 1, 0, 0, 5, 0]
  let r9 = [0, 8, 2, 7, 4, 0, 6, 3, 1]

  let tl = [...r1.slice(0,3), ...r2.slice(0,3), ...r3.slice(0,3)];
  let tm = [].concat(r1.slice(3,6), r2.slice(3,6), r3.slice(3,6));
  let tr = [].concat(r1.slice(6,9), r2.slice(6,9), r3.slice(6,9));
  
  let ml = [].concat(r4.slice(0,3), r5.slice(0,3), r6.slice(0,3));
  let mm = [].concat(r4.slice(3,6), r5.slice(3,6), r6.slice(3,6));
  let mr = [].concat(r4.slice(6,9), r5.slice(6,9), r6.slice(6,9));

  let bl = [].concat(r7.slice(0,3), r8.slice(0,3), r9.slice(0,3));
  let bm = [].concat(r7.slice(3,6), r8.slice(3,6), r9.slice(3,6));
  let br = [].concat(r7.slice(6,9), r8.slice(6,9), r9.slice(6,9));


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
    <Cell square={tl} />
  </div>
  <div class="tm">
    <Cell square={tm} />
  </div>
  <div class="tr">
    <Cell square={tr} />
  </div>
  <div class="ml">
    <Cell square={ml} />
  </div>
  <div class="mm">
    <Cell square={mm} />
  </div>
  <div class="mr">
    <Cell square={mr} />
  </div>
  <div class="bl">
    <Cell square={bl} />
  </div>
  <div class="bm">
    <Cell square={bm} />
  </div>
  <div class="br">
    <Cell square={br} />
  </div>
</div>