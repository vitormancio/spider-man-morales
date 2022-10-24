import spiderManLogo from '../../assets/spider-man-text.svg'
import psLogo from '../../assets/playstation-logo.svg'
import marvelLogo from '../../assets/marvel-logo.svg'
import spidermanImg from '../../assets/images/spider-man-img.png'

import './styles.scss'

export function Main () {
    return (
        <section className="container">
            <div className="container-item-1">
                <div>
                    <img src={spiderManLogo} alt="Spider man Miles Morales" />
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed massa aliquam vitae dictumst orci, lacinia viverra mattis. Pulvinar massa egestas velit eleifend aliquam duis magna.
                </p>

                <div>
                    <a href="" className="btn">Pre order now</a>
                    <a href="" className="btn-secondary">watch the teaser</a>
                </div>

                <div className='logo-images'>
                    <img src={psLogo} alt="Playstation" />
                    <img src={marvelLogo} alt="Marvel" />
                </div>
            </div>
            <div className="container-item-2">
                <img src={spidermanImg} alt="Spider-man" className='spider-man'/>
            </div>
        </section>
    )
}