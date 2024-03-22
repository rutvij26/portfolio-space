import shuffleArray from "@/utils/shuffleArray";

import React from 'react'
import SkillDataProvider from "./SkillDataProvider";

interface ISkillsRow {
	skillsArray: Array<any>
}

const SkillsRow = ({ skillsArray }: ISkillsRow) => {
	return (
		<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
			{
				shuffleArray<typeof skillsArray>(skillsArray).map((skill, index) => (
					<SkillDataProvider
						key={index}
						src={skill.Image}
						height={skill.height}
						width={skill.width}
						index={index}
					/>
				))
			}
		</div>
	)
}

export default SkillsRow

