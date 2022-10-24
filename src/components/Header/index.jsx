import './styles.scss'
import spiderImg from '../../assets/spider-logo.svg'
import facebookImg from '../../assets/facebook-logo.svg'
import instagramImg from '../../assets/instagram-logo.svg'
import youtubeImg from '../../assets/youtube-logo.svg'
import twitterImg from '../../assets/twitter-logo.svg'

export function Header () {
    return (
       <header>
        <nav className="navbar">
            <div className="nav-menu">
                <div className="logo"> <img src={spiderImg} alt="" /></div>
                <ul className="nav-list">
                    <li><a href="" className="nav-link">Home</a></li>
                    <li><a href="" className="nav-link">Story</a></li>
                    <li><a href="" className="nav-link">Wallpapers</a></li>
                    <li><a href="" className="nav-link">#BeYourself</a></li>
                </ul>
            </div>
            <div className="nav-social">
                <img src={facebookImg} alt="Facebook" />
                <img src={instagramImg} alt="Instagram" />
                <img src={youtubeImg} alt="Youtube" />
                <img src={twitterImg} alt="Twitter" />
            </div>
            <div className="bx">
                
            </div>
        </nav>
       </header>
    )
}