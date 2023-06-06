<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import { fly } from 'svelte/transition';
	import DropdownSelect from './DropdownSelect.svelte';

	let showNav = false;
</script>

<header class="bg-black-900 shadow-default fixed w-full z-10">
	<div class="flex w-full justify-between items-center relative px-4 max-w-[1200px] mx-auto">
		<button
			class="p-3 hover:bg-[#222] transitino text-center text-white font-rubik sm:hidden"
			on:click={() => (showNav = !showNav)}
		>
			<img src="./icons/menu.svg" alt="menu" />
		</button>
		{#if showNav}
			<nav
				class="absolute sm:hidden top-[100%] left-0 font-rubik text-base text-white flex flex-col items-center gap-1 bg-black-900 p-1 w-full"
				transition:fly={{ duration: 200, y: -20 }}
			>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#home"
					on:click={() => (showNav = false)}>{$_('nav_home')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] trsnsition text-center"
					href="#about"
					on:click={() => (showNav = false)}>{$_('nav_about')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#projects"
					on:click={() => (showNav = false)}>{$_('nav_projects')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#contact"
					on:click={() => (showNav = false)}>{$_('nav_contact')}</a
				>
			</nav>
		{/if}
		<nav
			class="hidden sm:flex font-rubik text-base text-white flex justify-center items-center gap-1"
			transition:fly
		>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#home">{$_('nav_home')}</a>
			<a class="px-2 py-3 hover:bg-[#222] trsnsition text-center" href="#about">{$_('nav_about')}</a
			>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#projects"
				>{$_('nav_projects')}</a
			>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#contact"
				>{$_('nav_contact')}</a
			>
		</nav>
		<DropdownSelect />
	</div>
</header>
