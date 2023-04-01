import { useState } from "react"
import Letterrow from "../Letterrow/Letterrow"

export default function Game(props){
    const WORD_LEN = 6
    const WORD_TO_GUESS = "ALICJA"
    const [wordList, setWordList] = useState([])
    const [currentWord, setCurrentWord] = useState('')
    const [playing, setPlaying] = useState(true)

    const updateCurrentWord = e => {
        if(!playing)
            return
        const word = e.target.value
        if(word.length <= WORD_LEN)
            setCurrentWord(word.toUpperCase())
    }

    const addWordList = e => {
        e.preventDefault()
        if(!playing)
            return
        if(currentWord.length === WORD_LEN) {
            const newList = wordList
            newList.push(currentWord)
            setWordList(newList)
            if(currentWord == WORD_TO_GUESS)
            {
                setPlaying(false)
                alert(`Gratulacje, zgadłeś za ${wordList.length} próbą`)
            }
            setCurrentWord('')
        }
    }

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
            <form onSubmit={addWordList}>
                <input type="text" value={currentWord} onChange={updateCurrentWord} />
                <button type="submit">Dodaj nowy</button>
            </form>
        </div>
        <Letterrow word={currentWord} wordsize={WORD_LEN} />
    </div>
    )
}