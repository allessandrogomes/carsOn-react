import Credits from "./Credits";
import SocialMedias from "./SocialMedias";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMedias = [
    {
        icon: <GitHubIcon />,
        link: "https://github.com/allessandrogomes"
    },
    {
        icon: <LinkedInIcon />,
        link: "https://linkedin.com/in/allessandrogomes"
    }
]

export default function Footer() {
    return (
        <div className="text-center h-28 bg-teal-400 flex items-center justify-center font-archivo flex-col">
            <Credits />
            <SocialMedias socialMedias={socialMedias}/>
        </div>
    )
}