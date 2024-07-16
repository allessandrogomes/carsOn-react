import { ISocialMedias } from '..'

interface ISocialMedia {
  socialMedias: ISocialMedias[]
}

export default function SocialMedias({ socialMedias }: ISocialMedia) {
  return (
    <div className="flex gap-2">
      {socialMedias.map((item, index) => (
        <a target="_blank" href={item.link} key={index} rel="noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  )
}
