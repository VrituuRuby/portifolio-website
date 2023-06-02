interface Project {
	name: string;
	title: string;
	image: string;
	repo: string;
	liveDemo?: string;
}

export const projects: Project[] = [
	{
		name: 'ReactDex',
		title: 'Pokédex feita em React com PokéAPI',
		image: './images/poke.png',
		repo: 'https://github.com/VrituuRuby/react-pokedex',
		liveDemo: 'https://reactdex.onrender.com'
	},
	{
		name: 'IT.POINT',
		image: './images/itpoint.png',
		repo: 'https://github.com/VrituuRuby/it.point-web',
		title: 'Gerenciador de tickets de TI'
	}
];
