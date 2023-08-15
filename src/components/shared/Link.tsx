import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string
	isUnderline?: boolean
	label: string
}

export default function Link({ href, label, isUnderline, ...props }: Props) {
	return (
		<a
			href={href}
			className={`${
				isUnderline
					? 'underline decoration-dashed underline-offset-8'
					: ''
			} cursor-pointer hover:text-neutral-100`}
			{...props}
			rel='noreferrer'
			target={props.target || '_blank'}
		>
			{label}
			<span className='sr-only'>{label} link</span>
		</a>
	)
}
