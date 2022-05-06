<script lang="ts">
	import { t } from '$lib/translations';
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';
	import { peer, connections, players } from '$lib/stores';

	let canvas: HTMLCanvasElement;

	let startGame = () => {
		$connections.forEach(conn => {
			conn.send({
				type: 'start'
			});
		});
	};

	onMount(async () => {
		QRCode.toCanvas(canvas, $peer.id, { errorCorrectionLevel: 'H' }, (err) => null);

		$peer.on('connection', conn => {
			if($connections.filter(c => c.peer === conn.peer).length !== 0) return;
			connections.update(conns => [...conns, conn]);

			conn.on('data', data => {
				if(data.type === 'nickname') {
					if($players.filter(p => p.id === conn.peer).length !== 0) return;
					players.update(players => [...players, { id: conn.peer, nickname: data.nickname, score: 0 }]);

					conn.send({
						type: 'handshake',
						successful: true
					});
				}
			});

			conn.on('close', () => {
				connections.update(conns => conns.filter(c => c.peer !== conn.peer));
				players.update(players => players.filter(p => p.id !== conn.peer));
			});
		});
	});
</script>

<div class="flex gap-5">
	<canvas class="rounded-md" bind:this={ canvas }/>
	<div class="relative">
		<h1 class="text-white font-bold text-4xl select-none">quizr</h1>
		<p class="text-white text-xl select-none">{ $t('host.scanQRCode') }</p>
		<button class="absolute right-0 bottom-0 rounded-md px-5 py-2 bg-white hover:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-200" disabled={ $players.length < 2 } on:click={ startGame }>{ $t('host.startGame') }</button>
	</div>
</div>

<p class="text-white font-medium text-xl text-center mt-5 select-none">{ $t('host.playersConnected', { count: $connections.length }) }</p>
