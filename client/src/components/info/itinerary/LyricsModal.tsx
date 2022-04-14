import leftLeaf from '../../../assets/icons/leaf-arrow-left.svg'; 

export function LyricsModal(props: {songTitle: string, lyrics: string[]) {
    return (
        <div className="lyric-modal">
            <div className='lyric-modal-title'>{props.songTitle}</div>
            {
                props.lyrics.map(line => line.length === 0 ? <br/> : <p>{line}</p>)
            }
            <button className="backbutton" onClick={}>
                <img className="leaf" src={leftLeaf} alt={""}/>
                <div>Back</div>
            </button>
        </div>
    )
}