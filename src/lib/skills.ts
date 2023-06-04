interface skill {
	name: string;
	iconPath: string;
}

export const frontend: skill[] = [
	{ name: 'HTML5', iconPath: 'icons/html5-icon.svg' },
	{ name: 'CSS3', iconPath: 'icons/css3-icon.svg' },
	{ name: 'JavaScript', iconPath: 'icons/js-icon.svg' },
	{ name: 'React.js', iconPath: 'icons/react-icon.svg' },
	{ name: 'Next.js', iconPath: 'icons/next-icon.svg' },
	{ name: 'Svelte', iconPath: 'icons/svelte-icon.svg' },
	{ name: 'Tailwind CSS', iconPath: 'icons/tailwind-icon.svg' },
	{ name: 'Sass (CSS)', iconPath: 'icons/sass-icon.svg' }
];

export const backend: skill[] = [
	{ name: 'TypeScript', iconPath: 'icons/typescript-icon.svg' },
	{ name: 'Node.js', iconPath: 'icons/node-icon.svg' },
	{ name: 'Nest.js', iconPath: 'icons/nest-icon.svg' },
	{ name: 'Prisma.io', iconPath: 'icons/prisma-icon.svg' },
	{ name: 'PostgreSQL', iconPath: 'icons/postgress-icon.svg' },
	{ name: 'TypeORM', iconPath: 'icons/typeorm-icon.svg' }
];
