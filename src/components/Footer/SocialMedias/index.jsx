export default function SocialMedias({ socialMedias }) {
    return (
        <div className="flex gap-2">
            {socialMedias.map((item, index) => (
                <a target="_blank" href={item.link} key={index}>
                    {item.icon}
                </a>
            ))}
        </div>
    )
}