'use client'
import React from 'react'
import Tag from './Tag'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

const SkillText = () => {
	const [text, count] = useTypewriter({
		words: [
			"With skills honed sharp, I code and create,",
			"Harnessing tech's power, I innovate."
		],
		loop: true,
		delaySpeed: 800,
		deleteSpeed: 5
	})
	return (
		<div className='w-full h-auto flex flex-col items-center justify-center'>
			<Tag variants={slideInFromTop} text="Skills" />
			<motion.div
				variants={slideInFromLeft(0.5)}
				className='text-[-30px] text-white font-medium mt-[20px] text-center mb-[15px]'
			>
				{" "}
			</motion.div>
			<motion.div
				variants={slideInFromRight(0.5)}
				className='text-lg text-gray-400 mb-10 min-h-8 mt-[-20px] text-center'
			>
				{text}
			</motion.div>
		</div>
	)
}

export default SkillText
