import { ReactElement } from 'react'
import Credits from './Credits'
import SocialMedias from './SocialMedias'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export interface ISocialMedias {
  icon: ReactElement
  link: string
}

const socialMedias: ISocialMedias[] = [
  {
    icon: <GitHubIcon />,
    link: 'https://github.com/allessandrogomes',
  },
  {
    icon: <LinkedInIcon />,
    link: 'https://linkedin.com/in/allessandrogomes',
  },
]

// eslint-disable-next-line react/prop-types
export default function Footer({ bgColor = 'bg-teal-400' }) {
  return (
    <div
      className={`h-28 w-full text-center ${bgColor} flex flex-col items-center justify-center font-archivo`}
    >
      <Credits />
      <SocialMedias socialMedias={socialMedias} />
    </div>
  )
}
