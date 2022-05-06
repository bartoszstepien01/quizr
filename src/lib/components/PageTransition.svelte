<script>
  import { fly } from 'svelte/transition';
  export let url = '';
  const pageTransitionDuration = 500;

  let visible = false;

  $: {
    url;
    visible = false;
    setTimeout(() => visible = true, .7 * pageTransitionDuration);
  }
</script>

{#key url}
  <div class="{!visible ? 'hidden' : ''}" in:fly={{  y: 5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
       out:fly={{ y: -5, duration: .8 * pageTransitionDuration }}>
    <slot />
  </div>
{/key}