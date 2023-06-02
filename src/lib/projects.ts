interface Project {
	name: string;
	title: {
		'en-US': string;
		'pt-BR': string;
	};
	image: string;
	repo: string;
	liveDemo?: string;
}

export const projects: Project[] = [
	{
		name: 'ReactDex',
		title: {
			'pt-BR': 'Pokédex feita em React com PokéAPI',
			'en-US': 'Pokédex made in React with PokéAPI'
		},
		image: './images/poke.png',
		repo: 'https://github.com/VrituuRuby/react-pokedex',
		liveDemo: 'https://reactdex.onrender.com'
	},
	{
		name: 'IT.POINT',
		image: './images/itpoint.png',
		repo: 'https://github.com/VrituuRuby/it.point-web',
		title: { 'pt-BR': 'Gerenciador de tickets de TI', 'en-US': 'ITSM Ticket Manager' }
	}
];
