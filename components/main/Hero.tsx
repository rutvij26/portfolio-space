import React from 'react'
import HeroContent from '../sub/HeroContent'

export default function Hero() {
	return (
		<div className='relative flex flex-col h-full w-full'>
			<video
				autoPlay
				muted
				loop
				className='
					rotate-180 absolute top-[-340px] z-[1]
					left-0 object-cover
					w-full h-full 
				'
			>
				<source src="/blackhole.webm" type='video/webm' />
			</video>
			<HeroContent />
		</div>
	)
}
