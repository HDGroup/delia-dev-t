// app.js
const bip39 = require("bip39");

function generateMnemonicWords(language = "english") {
  const wordlist =
    language === "chinese"
      ? bip39.wordlists.chinese_simplified
      : bip39.wordlists.english;
  return bip39.generateMnemonic(undefined, undefined, wordlist);
}

function displayMnemonicWords(mnemonicWords, language = "english") {
  const $mnemonicWords = $(`#${language}-mnemonic-words`);
  $mnemonicWords.empty();
  const words = mnemonicWords.split(" ");

  words.forEach((word, index) => {
    $mnemonicWords.append(
      `<li class="list-group-item">${index + 1}. ${word}</li>`
    );
  });
}

$(document).ready(function () {
  $("#generate-btn").on("click", function () {
    const englishMnemonicWords = generateMnemonicWords("english");
    displayMnemonicWords(englishMnemonicWords, "english");

    const chineseMnemonicWords = generateMnemonicWords("chinese");
    displayMnemonicWords(chineseMnemonicWords, "chinese");
  });
});
