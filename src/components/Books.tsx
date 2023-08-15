import {
	allTimeFavorites,
	currentlyReading,
	onMyRadar,
	readThisYear,
	toRead,
} from '@/data/books'
import BookCard from './BookCard'
import { motion } from 'framer-motion'

export default function Books() {
	return (
		<motion.article className='flex flex-col gap-16'>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100'>
					Currently Reading
				</h2>
				<div className='w-full columns-3 gap-8'>
					{currentlyReading.length !== 0 &&
						currentlyReading.map((book) => <BookCard {...book} />)}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100'>2023</h2>
				<div className='w-full columns-3 gap-8'>
					{readThisYear.length !== 0 &&
						readThisYear.map((book) => <BookCard {...book} />)}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<div>
					<h2 className='mb-2 text-xl font-medium text-neutral-100'>
						On My Radar
					</h2>
					<span className='text-sm'>
						I want to read these in the coming weeks/months
					</span>
				</div>
				<div className='w-full columns-3 gap-8'>
					{onMyRadar.length !== 0 &&
						onMyRadar.map((book) => <BookCard {...book} />)}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<div>
					<h2 className='mb-2 text-xl font-medium text-neutral-100'>
						To Read
					</h2>
					<span className='text-sm'>
						I'll read these at some point
					</span>
				</div>
				<div className='w-full columns-3 gap-8'>
					{toRead.length !== 0 &&
						toRead.map((book) => <BookCard {...book} />)}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100'>
					All Time Favorites
				</h2>
				<div className='w-full columns-3 gap-8'>
					{allTimeFavorites.length !== 0 &&
						allTimeFavorites.map((book) => <BookCard {...book} />)}
				</div>
			</section>
		</motion.article>
	)
}
