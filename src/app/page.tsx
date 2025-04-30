'use client'
import { Github, Mail, Linkedin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { Meteors } from '@/components/magicui/meteors'
import NameWithVideo from './components/NameWithVideo'
import { ProjectsShowcase } from './components/MagicCard'

export default function Home() {
	const { ref: skillsRef, inView: skillsInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})
	const { ref: aboutRef, inView: aboutInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})
	const { ref: projectsRef, inView: projectsInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const skills = [
		{
			name: 'React',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
		},
		{
			name: 'Next.js',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'TypeScript',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
		},
		{
			name: 'JavaScript',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
		},
		{
			name: 'Tailwind CSS',
			icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
		},
		{
			name: 'HTML',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
		},
		{
			name: 'Sass',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
		},
		{
			name: 'Redux',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
		},
		{
			name: 'Redux Toolkit',
			icon: 'https://redux-toolkit.js.org/img/redux.svg',
		},
		{
			name: 'Axios',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Axios_logo.svg',
		},
		{
			name: 'VS Code',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Visual_Studio_Code_1.35_icon.svg',
		},
		{
			name: 'MUI',
			icon: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
		},
		{
			name: 'Ant Design',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg',
		},
		{
			name: 'Git',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
		},
		{
			name: 'GitHub',
			icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
		},
		{
			name: 'ShadCN/UI',
			icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
		},
		{
			name: 'Figma',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
		},
	]

	return (
		<div className='dark min-h-screen antialiased'>
			<Navbar />

			{/* Hero Section */}
			<section
				id='home'
				className='flex flex-col items-center justify-center min-h-screen text-center px-6 pt-16 pb-16 relative overflow-hidden'
			>
				<Meteors number={20} />
				<div className='max-w-4xl mx-auto relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<p className='text-[grey] mt-10 font-mono'>Hi, my name is</p>
						<main className='p-10'>
							<NameWithVideo />
						</main>
						<h2 className='text-3xl md:text-5xl font-bold text-muted-foreground mb-8'>
							I build things for the web.
						</h2>
						<p className='text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto'>
							I'm a frontend developer specializing in building exceptional
							digital experiences with React, Next.js, and modern web
							technologies.
						</p>
					</motion.div>

					<motion.div
						className='flex flex-col sm:flex-row items-center justify-center gap-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						<a
							href='#projects'
							className='px-8 py-3 bg-primary text-primary-foreground rounded-md text-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2'
						>
							View My Work
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
						<a
							href='#contact'
							className='px-8 py-3 border border-border text-foreground rounded-md text-lg font-semibold hover:border-accent hover:text-accent transition-all duration-300'
						>
							Get In Touch
						</a>
					</motion.div>
				</div>

				<motion.div
					className='absolute bottom-10 left-0 right-0 flex justify-center z-10'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.8 }}
				>
					<a href='#skills' className='animate-bounce'>
						<svg
							className='w-8 h-8 text-muted-foreground hover:text-accent transition-colors'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 14l-7 7m0 0l-7-7m7 7V3'
							/>
						</svg>
					</a>
				</motion.div>
			</section>

			{/* Skills Section */}
			<section id='skills' ref={skillsRef} className='py-20 px-6 bg-background'>
				<div className='container mx-auto max-w-6xl'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={skillsInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
							<span className='text-accent'></span> Skills & Technologies
						</h2>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							Here are the technologies I've been working with recently
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={skillsInView ? { opacity: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'
					>
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.2 }}
								className='flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors duration-300'
							>
								<div className='w-14 h-14 mb-4 flex items-center justify-center'>
									<img
										src={skill.icon}
										alt={skill.name}
										className='w-full h-full object-contain'
									/>
								</div>
								<span className='text-muted-foreground font-medium'>
									{skill.name}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id='projects'
				ref={projectsRef}
				className='py-20 px-6 bg-secondary relative overflow-hidden'
			>
				<Meteors number={15} />
				<div className='container mx-auto max-w-6xl relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={projectsInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
							<span className='text-accent'></span> Featured Projects
						</h2>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							Here are some of my recent projects
						</p>
					</motion.div>

					<motion.div>
						<main>
							<ProjectsShowcase />
						</main>
					</motion.div>
				</div>
			</section>

			<section id='about' ref={aboutRef} className='py-20 px-6 bg-background'>
				<div className='container mx-auto max-w-6xl'>
					<div className='flex flex-col md:flex-row gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={aboutInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.8 }}
							className='md:w-1/2'
						>
							<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
								<span className='text-accent'></span> About Me
							</h2>
							<div className='space-y-4 text-muted-foreground'>
								<p>
									I'm a passionate frontend developer with a strong focus on
									creating exceptional user experiences. With expertise in React
									and Next.js, I build performant, accessible, and visually
									appealing web applications.
								</p>
								<p>
									My journey in web development began several years ago, and
									since then I've had the opportunity to work on various
									projects ranging from small business websites to complex web
									applications.
								</p>
								<p>
									When I'm not coding, you can find me exploring new
									technologies, contributing to open-source projects, or
									enjoying outdoor activities.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={aboutInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='md:w-1/2 flex justify-center'
						>
							<div className='relative'>
								<div className='w-64 h-64 md:w-80 md:h-80 bg-card rounded-lg overflow-hidden border-2 border-accent/20'>
									{/* Placeholder for your image */}
									<div className='w-full h-full bg-muted flex items-center justify-center'>
										<span className='text-muted-foreground'>Your Photo</span>
									</div>
								</div>
								<div className='absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/50 rounded-lg bg-card z-10 flex items-center justify-center'>
									<span className='text-3xl text-accent font-bold'>2+</span>
									<span className='absolute -rotate-12 text-xs text-accent'>
										years experience
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='py-20 px-6 bg-secondary relative overflow-hidden'
			>
				<Meteors number={10} />
				<div className='container mx-auto max-w-4xl text-center relative z-10'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold text-foreground mb-4'
					>
						<span className='text-accent'></span> Get In Touch
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
						className='text-muted-foreground mb-12 max-w-2xl mx-auto'
					>
						Although I'm not currently looking for new opportunities, my inbox
						is always open. Whether you have a question or just want to say hi,
						I'll try my best to get back to you!
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className='flex flex-col sm:flex-row justify-center gap-6 mb-16'
					>
						<a
							href='mailto:azizovabella14@gmail.com'
							className='px-8 py-3 bg-primary text-primary-foreground rounded-md text-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2'
						>
							<Mail className='w-5 h-5' />
							Say Hello
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.9 }}
						viewport={{ once: true }}
						className='flex justify-center space-x-6'
					>
						<a
							href='https://github.com/Azizova-Bella'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-accent transition-colors'
							aria-label='GitHub'
						>
							<Github className='w-6 h-6' />
						</a>
						<a
							href='https://www.linkedin.com/in/bella-azizova-689313334/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-accent transition-colors'
							aria-label='LinkedIn'
						>
							<Linkedin className='w-6 h-6' />
						</a>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
