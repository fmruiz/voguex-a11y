import { useState, useEffect } from 'react'
/**
 * Custom hook that we can use to read the content of components by id.
 * Or speak an specific message
 */
const useScreenReader = (): {
    speakMessage: (message: string) => void
    setSpeechRate: (rate: number) => void
    speechRate: number
    speakComponentContent: (elementId: string) => void
} => {
    /**
     * State to save the velocity of voice
     */
    const [speechRate, setSpeechRate] = useState<number>(1.0)
    /**
     * Speech syntesis API
     */
    const speakMessage = (message: string) => {
        const utterance = new SpeechSynthesisUtterance(message)
        utterance.rate = speechRate
        speechSynthesis.speak(utterance)
    }
    /**
     *  Fn that detect an element and read the content
     * @param elementId: Is the id of the element
     */
    const speakComponentContent = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
            const content = element.innerText
            speakMessage(content)
        }
    }
    useEffect(() => {
        /**
         * Clear the announce when the component dismount
         */
        return () => {
            speechSynthesis.cancel()
        }
    }, [])

    return {
        speakMessage,
        setSpeechRate,
        speechRate,
        speakComponentContent,
    } as const
}

export default useScreenReader
