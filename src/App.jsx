import './App.css'
import {useEffect, useRef, useState} from "react";

const colors = {
    1: ["#394e7a", "#8e9ac7", "#4ee"],
    2: ["#22d", "#c8f8ff", "#6d2"],
    3: ["#39f", "#f4e54d", "#fa3"]
}
const lables = {
    1: "میتونه بهتر باشه",
    2: "خوبم",
    3: "عالی",
}

function App() {

    const wrapperRef = useRef();
    const [feeling, setFeeling] = useState(1);
    useEffect(() => {
        if (!wrapperRef) return
        const [colorOne, colorTwo, colorThree] = colors[feeling];
        wrapperRef.current.style.setProperty("--color-a", colorOne);
        wrapperRef.current.style.setProperty("--color-b", colorTwo);
        wrapperRef.current.style.setProperty("--color-c", colorThree);
    }, [feeling])
    const rangeChangeHandler = event => {
        setFeeling(event.target.value)
    }
    return (
        <div className="flex justify-center items-center w-screen min-h-[100dvh]">
            <div ref={wrapperRef}
                 className={'w-[360px] aspect-[9/16] mx-auto relative max-w-full overflow-hidden rounded-2xl bg-amber-700 p-8 bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] text-white duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[50px] after:brightness-125'}>
                <div className={'relative z-10'}>
                    <h1 className={'mb-12 text-5xl font-medium leading-tight text-center'}>حال امروزتان چگونه است؟</h1>
                    <h2 className="mb-4 text-center text-2xl font-medium">
                        {lables[feeling]}
                    </h2>
                    <div className={'px-10'}><input className={'range'} type="range" min={1} max={3} value={feeling}
                                                    step={1} onChange={rangeChangeHandler}/></div>
                </div>
            </div>
        </div>
    )
}

export default App
