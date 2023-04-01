import { useState } from "react"
import Letterrow from "../Letterrow/Letterrow"

export default function Game(props) {

    const WORD_LEN = 6
    const [wordList, setWordList] = useState(["ALICJA", "EMILIA", "ANIAAA"])
    const [currentWord, setCurrentWord] = useState('')

    const addWordList = (wordList, setWordList, newWord) => {
        const newList = wordList
        newList.push(newWord)
        setWordList(newList)
    }

    // addWordList(wordList, setWordList, "ALICJA")
    // addWordList(wordList, setWordList, "EMILIA")
    // addWordList(wordList, setWordList, "ANIAAA")

    // setWordList(["ALICJA", "EMILIA", "ANIAAA"])

    return (
        <div className="game">
            {wordList.map(word => (
                <Letterrow word={word} />
            ))}
        </div>
    )
}