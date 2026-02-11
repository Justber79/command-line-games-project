const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please enter a sentence.");
  return;
}

const sentence = args.join(" ");
const words = sentence.split(" ");
const vowels = ["a", "e", "i", "o", "u"];

const result = words.map(word => {
  const wordLower = word.toLowerCase();

  if (vowels.includes(wordLower[0])) {
    return wordLower + "way";
  }

  if (
    !vowels.includes(wordLower[0]) &&
    !vowels.includes(wordLower[1])
  ) {
    return wordLower.slice(2) + wordLower.slice(0, 2) + "ay";
  }

  return wordLower.slice(1) + wordLower[0] + "ay";
});

console.log(result.join(" "));