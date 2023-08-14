export type BookPresentation = {
	title: string
	description: string
}

export type Book = {
	title: string
	author: string
	cover?: string
}

export const data: BookPresentation = {
	title: 'Reading',
	description:
		"I read books regularly. I'm always reading two books at any time — one fiction and one non-fiction. I've grouped the books in the following categories: currently reading, on my reading list, and read in the past.<br /><br />I recently started taking notes of some of the books I'm reading. I'm publishing them here on my site. You can check them out on the <a class='underline decoration-dashed underline-offset-8' href='/book-notes' target='_self'>book notes</a>.",
}

export const currentlyReading: Book[] = [
	{
		title: 'The Bullet Journal Method',
		author: 'Ryder Carroll',
		cover: '/images/book-covers/bullet-journal-method.jpg',
	},
	{
		title: 'Persepolis Rising',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/persepolis-rising.jpg',
	},
]

export const readThisYear: Book[] = [
	{
		title: "Abaddon's Gate",
		author: 'James S. A. Corey',
		cover: '/images/book-covers/abaddons-gate.jpg',
	},
	{
		title: 'Cibola Burn',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/cibola-burn.jpg',
	},
	{
		title: 'Nemesis Games',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/nemesis-games.jpg',
	},
	{
		title: "Babylon's Ashes",
		author: 'James S. A. Corey',
		cover: '/images/book-covers/babylons-ashes.jpg',
	},
	{
		title: 'Show Your Work',
		author: 'Austin Kleon',
		cover: '/images/book-covers/show-your-work.jpg',
	},
	{
		title: 'Building a Second Brain',
		author: 'Tiago Forte',
		cover: '/images/book-covers/basb.jpg',
	},
	{
		title: 'Demon Slayer: Kimetsu no Yaiba',
		author: 'Koyoharu Gotouge',
		cover: '/images/book-covers/demon-slayer.webp',
	},
	{
		title: 'Attack on Titans: Shingeki no Kyojin',
		author: 'Hajime Isayama',
		cover: '/images/book-covers/aot.jpeg',
	},
	{
		title: 'The Sandman: Preludes & Nocturnes',
		author: 'Neil Gaiman',
		cover: '/images/book-covers/preludes-and-nocturnes.jpeg',
	},
	{
		title: "The Sandman: The Doll's House",
		author: 'Neil Gaiman',
		cover: '/images/book-covers/dolls-house.jpg',
	},
	{
		title: 'The Sandman: Dream Country',
		author: 'Neil Gaiman',
		cover: '/images/book-covers/dream-country.jpg',
	},
]

export const allTimeFavorites: Book[] = [
	{
		title: 'Dune Trilogy',
		author: 'Frank Herbert',
		cover: '/images/book-covers/dune.jpg',
	},
	{
		title: 'Three Body Problem Trilogy',
		author: 'Cixin Liu',
		cover: '/images/book-covers/three-body-problem.jpg',
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		cover: '/images/book-covers/atomic-habits.jpg',
	},
	{
		title: 'Ego is the Enemy',
		author: 'Ryan Holiday',
		cover: '/images/book-covers/ego-is-the-enemy.jpg',
	},
	{
		title: 'Lives of the Stoics',
		author: 'Ryan Holiday',
		cover: '/images/book-covers/lives-of-the-stoics.jpg',
	},
	{
		title: 'The Subtle Art of not Giving a Fuck',
		author: 'Mark Manson',
		cover: '/images/book-covers/subtle-art.jpg',
	},
	{
		title: 'The War of Art',
		author: 'Steven Pressfield',
		cover: '/images/book-covers/the-war-of-art.jpg',
	},
	{
		title: "Surely You're Joking, Mr. Feynman!",
		author: 'Richard Feynman',
		cover: '/images/book-covers/surely-youre-joking.jpg',
	},
]
