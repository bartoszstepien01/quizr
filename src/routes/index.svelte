<script lang="ts">
	import { t } from '$lib/translations'; 	
	import { onMount } from 'svelte';
	import { peer } from '$lib/stores';

	onMount(async () => {
		const Peer = (await import('peerjs')).default;

		if(!$peer) {
			peer.update(p => new Peer());
		}
	});
</script>

<h1 class="text-white font-bold text-9xl text-center select-none">quizr</h1>
<h2 class="text-white text-2xl text-center select-none mt-7">{ $t('index.question') }</h2>

<div class="flex gap-2 justify-center mt-2">
	<a href="host" class="bg-white hover:bg-slate-100 rounded-md text-2xl px-5 py-2 select-none">{ $t('index.host') }</a>
	<a href="player" class="bg-white hover:bg-slate-100 rounded-md text-2xl px-5 py-2 select-none">{ $t('index.player') }</a>
</div>