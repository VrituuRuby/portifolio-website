<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
</script>

<header class="bg-black-900 shadow-default">
	<div class="flex justify-between items-center mx-auto max-w-[1200px] px-4">
		<nav class="font-roboto text-white flex justify-center items-center gap-1">
			<a class="px-2 py-3 hover:bg-[#222]" href="#about">{$_('nav_about')}</a>
			<a class="px-2 py-3 hover:bg-[#222]" href="#projects">{$_('nav_projects')}</a>
			<a class="px-2 py-3 hover:bg-[#222]" href="#about">{$_('nav_home')}</a>
		</nav>
		<div>
			<select bind:value={$locale}>
				{#each $locales as locale}
					<option value={locale}>{locale}</option>
				{/each}
			</select>
		</div>
	</div>
</header>
