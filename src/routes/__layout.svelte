<script context="module">
	import { loadTranslations } from '$lib/translations'; 
	import { browser } from '$app/env';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => {
		if(!browser) return {};

		const { pathname } = url;
		await loadTranslations(navigator.language, pathname);
		return {
			props: {
				url
			}
		};
	}
</script>

<script>
	import '../app.css';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let url;
</script>

<PageTransition {url}>
	<slot />
</PageTransition>

