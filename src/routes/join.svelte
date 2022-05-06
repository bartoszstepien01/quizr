<script lang="ts">
	import { connections } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';

	let nickname: string = '';

	let onJoin = () => {
		$connections[0].send({
			type: 'nickname',
			nickname: nickname
		});

		$connections[0].on('data', data => {
			if(data.type === 'handshake' && data.successful) {
				goto('/waiting_room');
			}
		})
	};
</script>

<h1 class="text-white font-bold text-4xl text-center select-none">quizr</h1>
<p class="text-white text-xl text-center select-none mt-1">{ $t('join.joinGame') }</p>

<input class="rounded-md px-3 py-2 mt-5 outline-none" type="text" placeholder="{ $t('join.nicknameInput') }" bind:value={nickname}>
<br>
<button class="rounded-md mt-2 w-full px-5 py-2 bg-white hover:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-200" disabled={nickname.trim() === ''} on:click={onJoin}>{ $t('join.joinButton') }</button>