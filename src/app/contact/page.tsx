'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { HyperText } from '@/components/magicui/hyper-text'

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const sendToTelegram = async (data: typeof formData) => {
		const botToken = '7766547611:AAGB8SFWPkMlRQ5ZlJ5SfnZ1G1qzVFHUB8A'
		const chatId = '5462887942'

		const text = `
      📩 <b>New Message From Website</b>
      
      👤 <b>Name:</b> ${data.name}
      📧 <b>Email:</b> ${data.email}
      
      ✉️ <b>Message:</b>
      ${data.message}
    `

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: text,
				parse_mode: 'HTML',
			})
			return true
		} catch (error) {
			console.error('Error sending to Telegram:', error)
			throw error
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			toast.error('Please fill all fields', {
				position: 'top-center',
				style: {
					background: '#ef4444',
					color: '#fff',
					padding: '16px',
					borderRadius: '12px',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
				},
				iconTheme: {
					primary: '#fff',
					secondary: '#ef4444',
				},
			})
			return
		}

		setIsSubmitting(true)

		try {
			// Try sending to Telegram first
			await sendToTelegram(formData)

			// Show success toast
			toast.success('Message sent successfully!', {
				position: 'top-center',
				duration: 5000,
				style: {
					background: '#10b981',
					color: '#fff',
					padding: '16px',
					borderRadius: '12px',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
				},
				iconTheme: {
					primary: '#fff',
					secondary: '#10b981',
				},
			})

			// Email fallback
			const subject = `Message from ${formData.name}`
			const body = `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
			window.location.href = `mailto:azizovabella14@gmail.com?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`

			// Reset form
			setFormData({ name: '', email: '', message: '' })
		} catch (error) {
			toast.error('Failed to send via Telegram, using email instead', {
				position: 'top-center',
				duration: 5000,
				style: {
					background: '#ef4444',
					color: '#fff',
					padding: '16px',
					borderRadius: '12px',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
				},
				iconTheme: {
					primary: '#fff',
					secondary: '#ef4444',
				},
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	}

	return (
		<div className='min-h-screen bg-black text-white'>
			<Toaster
				position='top-center'
				gutter={12}
				containerStyle={{
					top: 40,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				toastOptions={{
					success: {
						duration: 3000,
						style: {
							background: '#8b5cf6',
							color: '#fff',
							padding: '16px 24px',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
							fontSize: '16px',
							fontWeight: '500',
						},
						iconTheme: {
							primary: '#fff',
							secondary: '#10b981',
						},
					},
					error: {
						duration: 4000,
						style: {
							background: '#ef4444',
							color: '#fff',
							padding: '16px 24px',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
							fontSize: '16px',
							fontWeight: '500',
						},
						iconTheme: {
							primary: '#fff',
							secondary: '#ef4444',
						},
					},
				}}
			/>

			<div className='fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50' />

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
				{/* Header */}
				<motion.div
					className='text-center mb-20'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className='bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
						<HyperText className='text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight leading-tight'>
							Contact Me
						</HyperText>
					</div>
					<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
						Have questions? I'm here to help! Reach out through any channel.
					</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 lg:grid-cols-2 gap-12'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					{/* Contact Cards */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{/* Telegram Card */}
						<motion.div
							variants={itemVariants}
							className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300'
						>
							<div className='w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 border border-blue-500/20'>
								<MessageSquare className='w-7 h-7 text-blue-400' />
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Telegram
							</h3>
							<p className='text-gray-400 mb-3'>Chat with me instantly</p>
							<a
								href='https://t.me/TJKGuideBot'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group'
							>
								@TJKGuideBot
								<span className='ml-2 group-hover:translate-x-1 transition-transform'>
									↗
								</span>
							</a>
						</motion.div>

						{/* Email Card */}
						<motion.div
							variants={itemVariants}
							transition={{ delay: 0.1 }}
							className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-300'
						>
							<div className='w-14 h-14 bg-red-900/30 rounded-full flex items-center justify-center mb-4 border border-red-500/20'>
								<Mail className='w-7 h-7 text-red-400' />
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
							<p className='text-gray-400 mb-3'>Send me a message</p>
							<a
								href='mailto:azizovabella14@gmail.com'
								className='text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group'
							>
								azizovabella14@gmail.com
								<span className='ml-2 group-hover:translate-x-1 transition-transform'>
									↗
								</span>
							</a>
						</motion.div>

						{/* Location Card */}
						<motion.div
							variants={itemVariants}
							transition={{ delay: 0.2 }}
							className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all duration-300'
						>
							<div className='w-14 h-14 bg-green-900/30 rounded-full flex items-center justify-center mb-4 border border-green-500/20'>
								<MapPin className='w-7 h-7 text-green-400' />
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Location
							</h3>
							<p className='text-gray-400 mb-3'>Based in</p>
							<span className='text-gray-200'>Tajikistan</span>
						</motion.div>

						{/* Phone Card */}
						<motion.div
							variants={itemVariants}
							transition={{ delay: 0.3 }}
							className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300'
						>
							<div className='w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 border border-purple-500/20'>
								<Phone className='w-7 h-7 text-purple-400' />
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
							<p className='text-gray-400 mb-3'>+992 991 88 12 05</p>
							<span className='text-gray-200'>Contact me first</span>
						</motion.div>
					</div>

					<motion.div
						variants={itemVariants}
						transition={{ delay: 0.4 }}
						className='bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl'
					>
						<h2 className='text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
							Send me a message
						</h2>
						<form onSubmit={handleSubmit}>
							<div className='mb-6'>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-300 mb-2'
								>
									Your Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className='w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300'
									required
								/>
							</div>

							<div className='mb-6'>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-300 mb-2'
								>
									Your Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className='w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300'
									required
								/>
							</div>

							<div className='mb-8'>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-300 mb-2'
								>
									Your Message
								</label>
								<textarea
									id='message'
									name='message'
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className='w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300'
									required
								/>
							</div>

							<motion.button
								type='submit'
								disabled={isSubmitting}
								className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed'
								whileHover={!isSubmitting ? { scale: 1.02 } : {}}
								whileTap={!isSubmitting ? { scale: 0.98 } : {}}
							>
								{isSubmitting ? (
									<>
										<svg
											className='animate-spin -ml-1 mr-2 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Sending...
									</>
								) : (
									<>
										<Send className='w-5 h-5 group-hover:rotate-12 transition-transform' />
										<span className='group-hover:translate-x-1 transition-transform'>
											Send Message
										</span>
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default ContactPage
