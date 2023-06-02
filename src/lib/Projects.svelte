<script>
	import { _ } from 'svelte-i18n';
	import { projects } from './projects';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';

	import { locale, isLoading } from 'svelte-i18n';
</script>

<section class="max-w-[1200px] mx-auto my-4 flex-col" id="projects">
	<h3 class="font-poppins text-3xl font-bold text-center">{$_('projects_title')}</h3>

	<div class="flex justify-between gap-2">
		{#each projects as project}
			<article class="flex-1 flex flex-col p-4">
				<h3 class="font-rubik font-bold text-center text-2xl">{project.name}</h3>
				<img
					src={project.image}
					alt={project.name}
					class="p-4 drop-shadow-default rounded-md bg-gray-500"
				/>
				{#if !$isLoading}
					<p class="font-roboto text-base text-center text-black-900">
						{project.title[$locale]}
					</p>
				{/if}
				<div class="flex justify-between gap-2">
					<a
						class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center items-center transition hover:brightness-110"
						href={project.repo}
						target="_blank"
					>
						<i class="w-6">
							<FaGithubSquare />
						</i>
						{$_('projects_repo_link')}
					</a>
					{#if project.liveDemo}
						<a
							class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center items-center transition hover:brightness-110"
							target="_blank"
							href={project.liveDemo}
						>
							<i class="w-4">
								<FaPlay />
							</i>
							{$_('projects_live_link')}
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	a.link {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
	}
</style>
