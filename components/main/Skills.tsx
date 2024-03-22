import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillText from '../sub/SkillText'
import SkillsRow from '../sub/SkillsRow'

const Skills = () => {
	return (
		<section
			id='skills'
			className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
			style={{ transform: "scale(0.9)" }}
		>
			<SkillText />
			<SkillsRow skillsArray={Frontend_skill} />
			<SkillsRow skillsArray={Backend_skill} />
			<SkillsRow skillsArray={Full_stack} />
			<SkillsRow skillsArray={Other_skill} />
			<div className="w-full h-full absolute">
				<div className="w-fill h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
					<video
						className='w-full h-auto'
						src="/cards-video.webm"
						preload='true'
						playsInline
						loop
						muted
						autoPlay
					/>
				</div>
			</div>
		</section>
	)
}

export default Skills
