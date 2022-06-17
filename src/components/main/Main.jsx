import { useEffect, useRef, useState } from "react";
import "./main.scss";
import PlayerControls from "./PlayerControls";
import Progress from "./Progress";

const Main = ({navbarOpen}) => {
    const [playing, setPlaying] = useState(false);
    const audioElement = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSong, setCurrentSong] = useState(0);
    const songs = [
        {title: "$orries",
         cover: require("../images/$orries.jpeg"),
         file: require("../songs/$orries.mp3")},
        {title: "Down With The Sickness",
         cover: require("../images/Down With The Sickness.jpeg"),
         file: require("../songs/Down With The Sickness.mp4")},
        {title: "Inside The Fire",
         cover: require("../images/Inside The Fire.jpg"),
         file: require("../songs/Inside The Fire.mp4")},
        {title: "Crushed",
         cover: require("../images/Crushed.jpg"),
         file: require("../songs/Crushed.mp4")},
        {title: "Scream",
         cover: require("../images/Scream.jpeg"),
         file: require("../songs/Scream.mp4")}
    ];

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

    const handleSongChange = (target) => {
        setPlaying(false);
        setTimeout(() => {
            setCurrentSong(target ?          
                            currentSong === songs.length -1 ? 0 : 
                            currentSong + 1 : currentSong === 0 ? 0 : 
                            currentSong - 1);
            setPlaying(true);
        }, 1000)
        
    }

    return (
        <div className="main-container" style={{marginLeft: navbarOpen ? 200 : 0 }}>
            <audio
                src={songs[currentSong].file}
                ref={audioElement}>
            </audio>
            <h2 style={{color: "white", width: 215, textAlign: "center"}}>{songs[currentSong].title}</h2>
            <img style={{width: 250, height: "auto"}} src={songs[currentSong].cover} alt="" />
            <Progress value={currentTime || 0} duration={duration || 0} />
            <PlayerControls SkipSong={handleSongChange} setIsPlaying={setPlaying} isPlaying={playing} />
        </div>
    )
}

export default Main;