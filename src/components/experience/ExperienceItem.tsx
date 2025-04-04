import { IExperience } from '@/types';
import React from 'react'

interface IExperienceItemProps {
    experience?: IExperience;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience }) => {
    return (
        <div>
            Eperience
        </div>
    )
}

export default ExperienceItem;
