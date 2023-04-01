import { useState, useCallback, useEffect } from "react"
import Letterrow from "../Letterrow/Letterrow"

export default function Game(props){
    const WORD_LEN = 6
    const WORD_TO_GUESS = "ALICJA"
    const [wordList, setWordList] = useState([])
    const [currentWord, setCurrentWord] = useState('')
    const [playing, setPlaying] = useState(true)

    const keyPressedHandler = useCallback(e => {
        var button = e.key
        console.log(button)
        if(button === "Enter"){
            if(currentWord.length === WORD_LEN) {
                const newList = wordList
                newList.push(currentWord)
                setWordList(newList)
                if(currentWord == WORD_TO_GUESS)
                {
                    setPlaying(false)
                    window.removeEventListener("keyup", keyPressedHandler);
                    alert(`Gratulacje, zgadłeś za ${wordList.length} próbą`)
                }
                setCurrentWord('')
            }
        }
        else if(button === "Backspace"){
            console.log("backspace")
            const newWord = currentWord.substring(0, currentWord.length-1)
            setCurrentWord(newWord)
        }
        else {
            if(button.match(/^[A-Za-z]$/g)){
                const newWord = currentWord + button
                if(newWord.length <= WORD_LEN){
                    setCurrentWord(newWord.toUpperCase())
                }
            }
        }
    },[currentWord, wordList])

    useEffect(() => {
        window.addEventListener("keyup", keyPressedHandler);
        return (() => {window.removeEventListener("keyup", keyPressedHandler)})
    })

    return (
    <div className="game">
        <div className="gamecontainer">
            {wordList.map(word => (
                <Letterrow 
                word={word} 
                wordsize={word.length} 
                solution={WORD_TO_GUESS}
                />
            ))}
        </div>
        <Letterrow word={currentWord} wordsize={WORD_LEN} />
    </div>
    )
}