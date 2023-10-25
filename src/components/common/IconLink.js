import TelegramIcon from "../icons/TelegramIcon";
import DiscordIcon from "../icons/DiscordIcon";
import XIcon from "../icons/XIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import RedditIcon from "../icons/RedditIcon";
import VolumeIcon from "../icons/VolumeIcon";

function IconLink(props) {
  return (
    <div className="icon-link">
      {props.icon === 'telegram' && <TelegramIcon/>}
      {props.icon === 'discord' && <DiscordIcon/>}
      {props.icon === 'x' && <XIcon/>}
      {props.icon === 'facebook' && <FacebookIcon/>}
      {props.icon === 'linkedin' && <LinkedinIcon/>}
      {props.icon === 'reddit' && <RedditIcon/>}
      {props.isVolume && <VolumeIcon className="icon-link__icon-volume" />}
    </div>
  );
}

export default IconLink;
