export const speak = (text) => {
  var synth = window.speechSynthesis;
  var utterance1 = new SpeechSynthesisUtterance(text);
  synth.speak(utterance1);

  var amISpeaking = synth.speaking;
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
