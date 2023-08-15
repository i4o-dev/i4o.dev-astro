import type { Book } from '@/data/books'

export default function BookCard({ cover }: Book) {
	return (
		<figure className='mb-8 overflow-hidden rounded-2xl rounded-bl-none rounded-tl-none shadow-xl'>
			<img
				className='h-full w-full object-cover'
				loading='lazy'
				src={cover}
			/>
		</figure>
	)
}
