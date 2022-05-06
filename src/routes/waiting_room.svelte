<script lang="ts">
	import { connections } from '$lib/stores';

	let started = false;

	$connections[0].on('data', data => {
		if(data.type === 'start')
			started = true;
	});
</script>

<h1 class="text-white font-bold text-4xl text-center select-none">quizr</h1>
<p class="text-white text-xl text-center select-none mt-1">waiting room</p>
<p class="text-white text-base text-center select-none mt-8">wait for the game to start</p>
<p class="text-white text-base text-center select-none">the game has{ started ? '' : ' not yet' } started</p>