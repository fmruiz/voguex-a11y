import { useState, useEffect } from 'react'
/**
 * Custom hook that offer a voice to notice if you are online or offline
 */
const useSpeakOnlineStatus = (): {
  onlineStatus: boolean
  speakOnlineStatus: (isOnline: boolean) => void
} => {
  /**
   * Status of navigator network, return true if you are online or false
   * if you are offline
   */
  const [onlineStatus, setOnlineStatus] = useState<boolean>(navigator.onLine)
  /**
   * Speak online status with speech API
   * @param isOnline: boolean
   */
  const speakOnlineStatus = (isOnline: boolean) => {
    const statusMessage = isOnline ? 'You are online' : 'You are offline'
    const announcement = new SpeechSynthesisUtterance(statusMessage)
    speechSynthesis.speak(announcement)
  }
  useEffect(() => {
    const handleSetOnline = () => {
      setOnlineStatus(true)
      speakOnlineStatus(true)
    }

    const handleSetOffline = () => {
      setOnlineStatus(false)
      speakOnlineStatus(false)
    }

    if (navigator.onLine) {
      handleSetOnline()
    } else {
      handleSetOffline()
    }
    /**
     * Clear the announce when the component dismount
     */
    return () => {
      speechSynthesis.cancel()
    }
  }, [onlineStatus, setOnlineStatus])

  return { onlineStatus, speakOnlineStatus }
}

export default useSpeakOnlineStatus
