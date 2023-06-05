<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import DropdownSelect from './DropdownSelect.svelte';
</script>

<header class="bg-black-900 shadow-default fixed w-full z-10">
	<div class="flex justify-between items-center px-4">
		<nav class="font-rubik text-base text-white flex justify-center items-center gap-1">
			<a class="px-2 py-3 hover:bg-[#222] transition" href="#home">{$_('nav_home')}</a>
			<a class="px-2 py-3 hover:bg-[#222] trsnsition" href="#about">{$_('nav_about')}</a>
			<a class="px-2 py-3 hover:bg-[#222] transition" href="#projects">{$_('nav_projects')}</a>
			<a class="px-2 py-3 hover:bg-[#222] transition" href="#contact">{$_('nav_contact')}</a>
		</nav>
		<DropdownSelect />
	</div>
</header>
