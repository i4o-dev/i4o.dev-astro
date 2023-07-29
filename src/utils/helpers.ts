import querystring from 'node:querystring'
import theme from '@/data/theme'
import type { TailwindColor } from './types/tailwind'

export function convertAsteriskToStrongTag(str: string) {
    return str.replace(
        /\*{1,2}(.*?)\*{1,2}/g,
        `<strong class="font-normal ${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
        }">$1</strong>`
    )
}

export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-GB').format(date)
}

export const MAP_COLOR_VARIANT_TO_BG: Record<TailwindColor, string> = {
    brand: 'bg-brand-500',
    orange: 'bg-orange-500',
    violet: 'bg-violet-500',
    red: 'bg-red-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-500',
    lime: 'bg-lime-500',
    green: 'bg-green-500',
    emerald: 'bg-emerald-500',
    teal: 'bg-violet-500',
    cyan: 'bg-cyan-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    fushia: 'bg-fushia-500',
    pink: 'bg-pink-500',
    rose: 'bg-rose-500',
}

export const MAP_COLOR_VARIANT_TO_TEXT: Record<TailwindColor, string> = {
    brand: 'text-brand-500',
    orange: 'text-orange-500',
    violet: 'text-violet-500',
    red: 'text-red-500',
    amber: 'text-amber-500',
    yellow: 'text-yellow-500',
    lime: 'text-lime-500',
    green: 'text-green-500',
    emerald: 'text-emerald-500',
    teal: 'text-violet-500',
    cyan: 'text-cyan-500',
    blue: 'text-blue-500',
    indigo: 'text-indigo-500',
    purple: 'text-purple-500',
    fushia: 'text-fushia-500',
    pink: 'text-pink-500',
    rose: 'text-rose-500',
}

export function removeTrailingSlash(pathname: string) {
    const matchTrailingSlash = /\w+\/$/
    if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1)
    return pathname
}

export function sortAndGroupPostsByYear(posts: any[]) {
    const articlesGroupedByYear = posts.reduce((groups, post) => {
        const year = post.data.date_published.toISOString().split('-')[0]
        if (!groups[year]) {
            groups[year] = []
        }

        groups[year].push(post)

        return groups
    }, {})

    const sortedAndGroupedArticles: any = {}

    for (const year in articlesGroupedByYear) {
        const sortedArticlesList = articlesGroupedByYear[year].sort(
            (a: any, b: any) =>
                new Date(b.data.date_published).valueOf() -
                new Date(a.data.date_published).valueOf()
        )

        sortedAndGroupedArticles[year] = sortedArticlesList
    }

    return sortedAndGroupedArticles
}

const client_id = import.meta.env.SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
// const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
// const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
    try {
        return fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        })
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getNowPlaying = async () => {
    const data = await getAccessToken()

    if (data) {
        const { access_token } = await data.json()

        return fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
    } else {
        return null
    }
}

// export const getTopTracks = async () => {
// 	const { access_token } = await getAccessToken();
//
// 	return fetch(TOP_TRACKS_ENDPOINT, {
// 		headers: {
// 			Authorization: `Bearer ${access_token}`,
// 		},
// 	});
// };
//
// export const getRecentlyPlayed = async () => {
// 	const { access_token } = await getAccessToken();
//
// 	return fetch(RECENTLY_PLAYED_ENDPOINT, {
// 		headers: {
// 			Authorization: `Bearer ${access_token}`,
// 		},
// 	});
// };
