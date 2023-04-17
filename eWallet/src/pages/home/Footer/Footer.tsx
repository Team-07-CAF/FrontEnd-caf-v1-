import {FooterBox, SocialMedia} from '../Footer/Style.Footer';
import instaIcon from '../../../assets/images/Insta.svg';
import facebookIcon from '../../../assets/images/facebook.svg';
import likedinICon from '../../../assets/images/linkedin.svg';
import twitterIcon from '../../../assets/images/twitter.svg';

export const Footer = () => {
    return (
    <FooterBox>
      <SocialMedia>
        <a href="#"><img src={likedinICon}alt="" /></a>
        <a href="#"><img src={twitterIcon} alt="" /></a>
        <a href="#"><img src={facebookIcon} alt="" /></a>
        <a href="#"><img src={instaIcon} alt="" /></a>
      </SocialMedia>
    </FooterBox>
    )
    

}