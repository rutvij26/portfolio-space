'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface ISkillDataProviderProps {
	src: string,
	width: number,
	height: number,
	index: number
}

const imageVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

const animationDelay = 0.3

const SkillDataProvider = ({ src, width, height, index }: ISkillDataProviderProps) => {
	const { ref, inView } = useInView({
		triggerOnce: true
	})


	return (
		<motion.div
			ref={ref}
			initial="hidden"
			variants={imageVariants}
			animate={inView ? "visible" : "hidden"}
			custom={index}
			transition={{ delay: index * animationDelay }}
		>
			<Image
				src={src}
				height={height}
				width={width}
				alt='skill image'
			/>
		</motion.div>
	)
}

export default SkillDataProvider
