export const speakMessage = (message: string) => {
  const utterance = new SpeechSynthesisUtterance(message!);
  speechSynthesis.speak(utterance);
};
