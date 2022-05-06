<script lang="ts">
	import QrScanner from 'qr-scanner';
	import { onMount } from 'svelte';
	import { t } from '$lib/translations';
	import { peer, connections } from '$lib/stores';
	import { goto } from '$app/navigation';

	let video: HTMLVideoElement;
	let width: number;
	let height: number;

	onMount(() => {
		let qrScanner = new QrScanner(video, result => {
			let conn = $peer.connect(result.data);

			conn.on('open', () => {
				qrScanner.destroy();
				qrScanner = null;
				connections.update(conns => [...conns, conn]);
				goto('/join');
			});

			qrScanner.stop();
		}, { highlightScanRegion: true, highlightCodeOutline: true, disallowCanvasResizing: true });

		qrScanner.start();
	});
</script>

<h1 class="text-white font-bold text-4xl text-center select-none">quizr</h1>
<p class="text-white text-xl text-center select-none mt-1">{ $t('host.scanQRCode') }</p>
<div class="relative w-64 h-64 overflow-hidden block rounded-md mx-auto mt-5">
	<video class="relative { width > height ? 'horizontal' : 'vertical' }" style="--width: {width}; --height: {height};" bind:this={video} bind:videoWidth={width} bind:videoHeight={height}>
		<track kind="captions"/>
	</video>
</div>

<style>
	.horizontal {
		top: 0;
		max-width: max-content;
		max-height: 16rem;
		left: calc((var(--width) * 16rem / var(--height) - 16rem) / -2);
	}

	.vertical {
		left: 0;
		max-width: 16rem;
		max-height: max-content;
		top: calc((var(--height) * 16rem / var(--width) - 16rem) / -2);
	}
</style>