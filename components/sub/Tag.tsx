import { slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { Variants, motion } from 'framer-motion'
import React from 'react'

interface ITagProps {
	variants: Variants
	text: string
}

const Tag = ({ variants, text }: ITagProps) => {
	return (
		<motion.div
			variants={variants}
			className="
					Welcome-box py-[8px] px-[7px] 
					border border-[#7042f88b] opacity-[0.9]
					"
		>
			<SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
			<h1 className='Welcome-text text-[13px]'>{text}</h1>
		</motion.div>
	)
}

export default Tag
