<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { backend, frontend } from './skills';
</script>

<div class="flex flex-col gap-1 py-4">
	<h3 class="font-poppins text-center text-3xl">{$_('skills_title')}</h3>
	<div class="flex gap-4">
		<div class="flex flex-col flex-1 p-2 rounded-lg bg-gray-100 shadow-lg gap-2">
			<h4 class="font-poppins font-bold text-center text-xl rounded-full w-full text-gray-800">
				Frontend
			</h4>
			<div class="flex flex-wrap gap-2 justify-center">
				{#each frontend as skill}
					<div class="flex gap-2 p-2 font-rubik text-xl text-gray-800 bg-gray-300 rounded-lg">
						<img src={skill.iconPath} alt={skill.name} />
						{skill.name}
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col flex-1 p-2 rounded-lg bg-gray-100 shadow-lg gap-2">
			<h4 class="font-poppins font-bold text-center text-xl rounded-full w-full text-gray-800">
				Backend
			</h4>
			<div class="flex flex-wrap gap-2 justify-center">
				{#each backend as skill}
					<div class="flex gap-2 p-2 font-rubik text-xl text-gray-800 bg-gray-300 rounded-lg">
						<img src={skill.iconPath} alt={skill.name} />
						{skill.name}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
