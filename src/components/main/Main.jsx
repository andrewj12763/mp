import { useEffect, useRef, useState } from "react";
import "./main.scss";
import PlayerControls from "./PlayerControls";
import Progress from "./Progress";

const Main = ({navbarOpen}) => {
    const [playing, setPlaying] = useState(false);
    const audioElement = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (playing) {
          audioElement.current.play();
          setDuration(audioElement.current.duration)
        } else {
          audioElement.current.pause();
        }
    }, [playing]);

    useEffect(() => {
        if(audioElement && audioElement.current && playing) {
            setTimeout(() => {
                setCurrentTime(currentTime + .2)
            }, 200)
        }
    }, [currentTime, playing])

    return (
        <div className="main-container" style={{marginLeft: navbarOpen ? 200 : 0 }}>
            <audio
                src={require("../songs/$orries.mp3")}
                ref={audioElement}>
            </audio>
            <Progress value={currentTime || 0} duration={duration || 0} />
            <PlayerControls SkipSong={true} setIsPlaying={setPlaying} isPlaying={playing} />
        </div>
    )
}

export default Main;