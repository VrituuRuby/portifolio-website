<script>
	import '../i18n';
	import { _ } from 'svelte-i18n';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';

	const background = './images/background.svg';

	import { locale, waitLocale } from 'svelte-i18n';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export const load = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};

	let dark = false;
	onMount(() => {
		const settedDarkMode = localStorage.getItem('dark-mode');
		if (settedDarkMode) dark = JSON.parse(settedDarkMode);
	});
</script>

<svelte:head>
	<title>{$_('page_title')}</title>
</svelte:head>

<div class:dark>
	<div class="bg-gray-100 dark:bg-gray-950 background transition-[200ms]">
		<Header bind:dark />
		<main class="px-8 flex flex-col gap-4 max-w-[1200px] mx-auto">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
	div.background {
		background-image: url('./images/background.svg');
		background-position: top;
	}
</style>
