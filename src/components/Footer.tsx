import Link from './shared/Link'

export default function Footer() {
	return (
		<footer className='mt-24'>
			<div className='z-40 flex w-full flex-col items-center gap-2 md:flex-row md:justify-between'>
				<div className='flex items-center gap-2'>
					<p>2023 © Ilango Rajagopal</p>
				</div>
				<div className='flex items-center justify-end gap-4'>
					<nav className='flex items-center' role='navigation'>
						<ul role='list' className='flex flex-row gap-2'>
							<li>
								<Link
									href='/rss.xml'
									label='RSS'
									target='_self'
								/>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}
