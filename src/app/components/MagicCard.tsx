'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { MagicCard } from '@/components/magicui/magic-card'

export function ProjectsShowcase() {
	const projects = [
		{
			title: 'Online E-commerce Shop',
			description:
				'A modern online store built with Next.js, TypeScript, and Tailwind CSS with Stripe integration.',
			tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
			codeLink: 'https://github.com/Azizova-Bella/Shop_Web_Next.js',
			demoLink: 'https://shop-web-next-js-azizova-bella.vercel.app/en',
			image: '/store.png',
		},
		{
			title: 'Instagram Clone',
			description:
				'Instagram clone with React, TypeScript, FSD architecture, and Tailwind CSS.',
			tags: ['React', 'TypeScript', 'Tailwind CSS', 'FSD'],
			codeLink: 'https://github.com/Kholmurod02/instagram',
			demoLink: 'https://shop-web-next-js-azizova-bella.vercel.app/en',
			image: '/store.png',
		},
	]

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className='grid md:grid-cols-2 gap-8 my-12 bg-inherit'
		>
			{projects.map((project, index) => (
				<motion.div
					key={index}
					whileHover={{ y: -5 }}
					transition={{ duration: 0.2 }}
				>
					<MagicCard
						borderWidth={1}
						spotlightColor='hsl(263.4, 70%, 50%)'
						spotlightSize='200px'
						spotlightOpacity={0.15}
						className='h-full border-border hover:border-accent/30 transition-colors duration-300'
					>
						<div className='h-72 w-full relative overflow-hidden rounded-t-lg'>
							<Image
								src={project.image}
								alt={`${project.title} Screenshot`}
								fill
								className='object-cover'
								priority
							/>
						</div>

						<div className='p-6'>
							<h3 className='text-xl font-semibold text-foreground mb-2'>
								{project.title}
							</h3>
							<p className='text-muted-foreground mb-4'>
								{project.description}
							</p>
							<div className='flex flex-wrap gap-2 mb-4'>
								{project.tags.map(tag => (
									<span
										key={tag}
										className='px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full'
									>
										{tag}
									</span>
								))}
							</div>
							<div className='flex gap-4'>
								<a
									href={project.codeLink}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-accent transition-colors flex items-center gap-1'
								>
									<Github className='w-4 h-4' /> Code
								</a>
								<a
									href={project.demoLink}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-accent transition-colors flex items-center gap-1'
								>
									<ExternalLink className='w-4 h-4' /> Live Demo
								</a>
							</div>
						</div>
					</MagicCard>
				</motion.div>
			))}
		</motion.div>
	)
}
