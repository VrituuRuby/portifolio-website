<script lang="ts">
	import { _ } from 'svelte-i18n';

	const src = 'https://avatars.githubusercontent.com/u/61244052?v=4';
</script>

<div
	id="about"
	class=" text-center mb-20 flex flex-col gap-10 sm:px-[100px] items-center justify-center scroll-mt-12 md:flex-row md:text-left"
>
	<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<clipPath id="shape">
				<path transform="translate(100 100)">
					<animate
						attributeName="d"
						dur="2000ms"
						repeatCount="indefinite"
						values="M43,-74.5C56,-67,66.9,-56,75.1,-43C83.3,-30,88.7,-15,88.7,0C88.7,15,83.2,29.9,75.1,43.1C67,56.3,56.4,67.8,43.4,76.4C30.5,85.1,15.3,91,-0.4,91.6C-16,92.2,-32,87.7,-45.8,79.5C-59.7,71.4,-71.5,59.7,-79,45.9C-86.6,32,-89.9,16,-88.8,0.7C-87.6,-14.7,-82,-29.4,-74.4,-43.2C-66.8,-57,-57.3,-69.8,-44.6,-77.5C-31.8,-85.2,-15.9,-87.6,-0.5,-86.8C15,-86.1,30,-82,43,-74.5Z;
						M43.6,-75.4C57.6,-67.4,70.8,-58,78.3,-45.1C85.7,-32.3,87.4,-16.2,86.1,-0.8C84.7,14.6,80.3,29.2,73.1,42.5C65.9,55.7,55.9,67.7,43.3,75.8C30.7,83.8,15.3,88,-0.1,88.1C-15.4,88.2,-30.9,84.2,-45,77C-59.1,69.8,-71.9,59.3,-78.9,46C-85.9,32.6,-87.2,16.3,-86.9,0.2C-86.5,-15.9,-84.5,-31.8,-78.1,-46.2C-71.7,-60.6,-60.8,-73.5,-47,-81.6C-33.3,-89.7,-16.6,-93,-0.9,-91.4C14.8,-89.8,29.6,-83.4,43.6,-75.4Z; 
						M44.9,-77.5C58.5,-69.9,70.2,-58.6,77.4,-45C84.6,-31.5,87.5,-15.7,87.3,-0.1C87.1,15.5,83.9,31.1,77.1,45.3C70.3,59.6,59.8,72.5,46.4,80.5C32.9,88.4,16.5,91.3,0.8,89.9C-14.8,88.5,-29.7,82.7,-42.4,74.4C-55.1,66,-65.6,55,-74.2,42.2C-82.7,29.3,-89.2,14.7,-89.6,-0.2C-90,-15.1,-84.3,-30.3,-75.8,-43.1C-67.2,-55.8,-55.7,-66.3,-42.6,-74.1C-29.5,-82,-14.8,-87.2,0.4,-88C15.6,-88.8,31.3,-85,44.9,-77.5Z;
						M43,-74.5C56,-67,66.9,-56,75.1,-43C83.3,-30,88.7,-15,88.7,0C88.7,15,83.2,29.9,75.1,43.1C67,56.3,56.4,67.8,43.4,76.4C30.5,85.1,15.3,91,-0.4,91.6C-16,92.2,-32,87.7,-45.8,79.5C-59.7,71.4,-71.5,59.7,-79,45.9C-86.6,32,-89.9,16,-88.8,0.7C-87.6,-14.7,-82,-29.4,-74.4,-43.2C-66.8,-57,-57.3,-69.8,-44.6,-77.5C-31.8,-85.2,-15.9,-87.6,-0.5,-86.8C15,-86.1,30,-82,43,-74.5Z;"
					/>
				</path>
			</clipPath>
		</defs>
		<image width="200" clip-path="url(#shape)" xlink:href={src} />
	</svg>

	<!-- <img {src} class="max-w-[300px] rounded-full border-white border-[7px]" alt="profile pic" /> -->
	<div class="flex flex-col gap-2">
		<h3 class="font-poppins text-3xl">
			{$_('about_me_title')}
		</h3>
		<p class="font-roboto text-justify text-base sm:text-left text-black-900 dark:text-gray-200">
			{$_('about_me_text')}
		</p>
	</div>
</div>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
