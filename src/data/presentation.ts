type Social = {
	label: string
	link: string
}

type Presentation = {
    logo: string
	mail: string
	title: string
	description: string
	socials: Social[]
}

const presentation: Presentation = {
    logo: 'https://i4o.dev/logo.png',
	mail: 'hey@i4o.dev',
	title: 'Hi, I’m Ilango 👋',
	description:
		"Hello, I'm a *software engineer* from Bangalore, India. I build *open-source* apps and tools with *Remix, React, TypeScript, and Rust*. I write about web development, indiehacking, and personal growth.",
	socials: [
		{
			label: 'Twitter',
			link: 'https://twitter.com/i4o_dev',
		},
		{
			label: 'Github',
			link: 'https://github.com/i4o-dev',
		},
		{
			label: 'Bento',
			link: 'https://bento.me/i4o',
		},
	],
}

export default presentation
