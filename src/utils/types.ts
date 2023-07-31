export type TailwindColor =
	| 'brand'
	| 'orange'
	| 'violet'
	| 'red'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'fushia'
	| 'pink'
	| 'rose'

export type Artist = {
	name: string
	images: { url: string }[]
	external_urls: { spotify: string }
	followers: { total: number }
}

export type NowPlayingTrackResponse = {
	isPlaying: boolean
	title: string
	artist: string
	url: string
	img: string
}
