<script>
  export let height;
  export let width;

  $: document.documentElement.style.setProperty('--height', height + "px") 
  $: document.documentElement.style.setProperty('--width', width + "px")
</script>

<style>
  .spacer {
    height: var(--height);
    width: var(--width);
  }
</style>

<div class="spacer"/>