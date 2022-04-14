import { LyricsModal } from "./LyricsModal";
import { MAIRIS_WEDDING_LYRICS } from "../../../data/lyricsData";
import { useState } from "react";

export function Songs() {

    const scotSongLink = "https://www.youtube.com/watch?v=--e5jWMtDrw";
    const polishSongLink = "https://www.youtube.com/watch?v=0GPoGf7Jmqw";
    // const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <div className="song-wrapper">
                <div className="song-title">Two Hearts</div>
                <div className="song-sub">Polish Folk</div>

            </div>
            <div className="song-wrapper">
                <div className="song-title">Mairi's (Ala's) Wedding</div>
                <div className="song-sub">Scottish Folk</div>
                    <LyricsModal
                    songTitle="Mairi's (Ala's) Wedding"
                    lyrics={MAIRIS_WEDDING_LYRICS}/>
            </div>
        </div>
    )
}