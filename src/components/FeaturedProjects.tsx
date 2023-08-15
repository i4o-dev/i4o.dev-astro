import type { Project } from '@/data/projects'
import Link from './shared/Link'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({
	projects,
}: {
	projects: Project[]
}) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-xl text-neutral-100'>Featured Projects</h2>
				<Link
					href='/projects'
					label='See all projects'
					isUnderline
					target='_self'
				/>
			</header>
			{projects.length === 0 && <p>Oops, I must work^^^^^</p>}

			<section className='flex flex-col gap-4'>
				{projects.length !== 0 &&
					projects
						.filter((project) => project.isFeatured)
						.map((project, index) => (
							<ProjectCard
								key={`project-${index}`}
								{...project}
							/>
						))}
			</section>
		</article>
	)
}
