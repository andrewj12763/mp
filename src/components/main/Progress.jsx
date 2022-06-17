import "./main.scss";

const Progress = ({value, duration}) => {
    return (
        <div className="progress-container">
            <input className="slider" style={{width: 200}} onChange={() => console.log("")} type="range" min="1" max={duration} value={value} />
        </div>
    )
}

export default Progress;