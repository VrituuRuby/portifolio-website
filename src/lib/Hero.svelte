<script>
	const src = 'https://avatars.githubusercontent.com/u/61244052?v=4';

	import linkedin from '../assets/mdi_linkedin.svg';
	import github from '../assets/mdi_github.svg';
	import curriculum from '../assets/pepicons-pop_cv.svg';

	import cvSrc from '../assets/Victor-Emanuel-de-Lima-Velozo-Curriculum.pdf';
</script>

<main class="flex justify-center items-center gap-16 p-[140px]">
	<img
		{src}
		class="max-w-[270px] w-[50vw] rounded-full border-white border-[7px]"
		alt="profile pic"
	/>
	<div class="flex-col text-4xl text-white">
		<h3 class="font-roboto font-bold drop-shadow-defalut">Hello World ✌️</h3>
		<h1 class="font-poppins font-black drop-shadow-defalut">Victor Velozo</h1>
		<h2 class="font-poppins font-black drop-shadow-defalut">Fullstack Developer</h2>
		<div class="flex justify-start gap-4 mt-2">
			<a href="https://www.linkedin.com/in/victorlv/" target="_blank">
				<img src={linkedin} alt="linkedin" class="drop-shadow-defalut" />
			</a>
			<a href="https://github.com/VrituuRuby" target="_blank">
				<img src={github} alt="linkedin" class="drop-shadow-default" />
			</a>
			<a href={cvSrc} target="_blank">
				<img src={curriculum} alt="linkedin" class="drop-shadow-default" />
			</a>
		</div>
	</div>
</main>
