<script lang="ts">
	import { _ } from 'svelte-i18n';

	const src = 'https://avatars.githubusercontent.com/u/61244052?v=4';
</script>

<div id="about" class="mb-20 flex gap-10 px-[100px] items-center justify-center scroll-mt-12">
	<img {src} class="max-w-[300px] rounded-full border-white border-[7px]" alt="profile pic" />
	<div class="flex flex-col gap-2">
		<h3 class="font-poppins text-3xl">
			{$_('about_me_title')}
		</h3>
		<p class="font-roboto text-xl text-black-900">{$_('about_me_text')}</p>
	</div>
</div>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
