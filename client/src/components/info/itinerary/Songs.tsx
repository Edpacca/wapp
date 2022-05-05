import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import polishFlag from '../../../assets/icons/PL.svg';
import scottishFlag from '../../../assets/icons/SC.svg';
import { faMusic, faHeadphones } from '@fortawesome/free-solid-svg-icons';

export function Songs() {

    const scotSongLink = "https://www.youtube.com/watch?v=--e5jWMtDrw";
    const polishSongLink = "https://www.youtube.com/watch?v=0GPoGf7Jmqw";
    const lyricLink = "http://edpacca.ddns.net:3000";

    return (
        <div>
            <button onClick={() => window.open(lyricLink, '_blank')} className="lyric-link">Song Lyrics <FontAwesomeIcon icon={faMusic}/></button>
            <div className="song-wrapper">
                <div className="song-title" onClick={() => window.open(polishSongLink,'_blank')}>Two Hearts <FontAwesomeIcon icon={faHeadphones}/></div>
                <div className="song-sub">Polish Folk</div>
                <img className="wee-flag" src={polishFlag} alt="polish flag"/>
            </div>
            <div className="song-wrapper">
                <div className='song-order'>Closing song</div>
                <div className="song-title" onClick={() => window.open(scotSongLink,'_blank')}>Mairi's (Ala's) Wedding <FontAwesomeIcon icon={faHeadphones}/></div>
                <div className="song-sub">Scottish Folk</div>
                <img className="wee-flag" src={scottishFlag} alt="scottish flag"/>
            </div>
        </div>
    )
}
