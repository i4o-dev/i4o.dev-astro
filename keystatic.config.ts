import { collection, config, fields } from '@keystatic/core'

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/articles/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
						description: 'The title of the post',
					},
				}),
				excerpt: fields.text({
					label: 'Excerpt',
					description:
						'The excerpt of the post that will be used as meta description for SEO',
				}),
				publishedAt: fields.conditional(
					fields.checkbox({
						label: 'Publish?',
						description:
							'If the post is a draft or should be published',
						defaultValue: false,
					}),
					{
						false: fields.empty(),
						true: fields.date({
							label: 'Publish Date',
							description: 'Set the published date of the post',
						}),
					}
				),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
	},
})
