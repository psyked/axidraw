<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<!-- <style>
  main {
    position: relative;
    max-width: 56em;
    background-color: darkslategrey;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100vw;
    height: calc(100vh - 57px);
  }
</style> -->

<Nav {segment} />

<main>
  <slot />
</main>
