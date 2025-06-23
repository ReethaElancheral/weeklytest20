import { useState, useEffect } from "react";

const StopWatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [Isrunning, setIsrunning] = useState(false);

    useEffect(() => {

        let Timer = null;

        if (Isrunning) {
            Timer = setInterval(() => {

                setSeconds(prev => prev + 1)

            }, 1000)
        }
        return () => clearInterval(Timer);
    }, [Isrunning])

    const FormatTime = (totalseconds) => {

        const hours = Math.floor(totalseconds / 3600);
        const mins = Math.floor((totalseconds % 3600) / 60);
        const sec = totalseconds % 60;

        const format = (num) => (num < 10 ? `0${num}` : num);

        return `${format(hours)}: ${format(mins)}:${format(sec)}`;

    };

    return (
        <>
            <div className="stopwatch-container">
                <h1 className="stopwatch">⏱️ Stopwatch/Timer</h1>
                <h1 className="time-display">
                    {FormatTime(seconds)}
                </h1>
                <div className="button-group">
                    <button onClick={() => setIsrunning(true)} disabled={Isrunning}>Start</button>
                    <button onClick={() => setIsrunning(false)} disabled={!Isrunning}>Stop</button>
                    <button onClick={() => { setIsrunning(false); setSeconds(0); }}>Reset</button>
                </div>
            </div>
        </>
    )


}

export default StopWatch;