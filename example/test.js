const { splitBar, filledBar } = require('string-progressbar');

const split = splitBar(100, 50);
const filled = filledBar(100, 50);

console.log("[" + split[0] + "] [" + split[1] + "%]\n\n");

console.log(filled[0] + " [" + filled[1] + "%]");