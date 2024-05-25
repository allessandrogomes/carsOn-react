import Credits from "./Credits";
import SocialMedias from "./SocialMedias";

export default function Footer() {
    return (
        <div className="text-center h-28 bg-teal-400 flex items-center justify-center font-archivo flex-col">
            <Credits />
            <SocialMedias />
        </div>
    )
}