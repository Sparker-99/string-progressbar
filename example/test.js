const { splitbar, filledbar } = require('string-progressbar');

const split = splitbar(100, 50);
const filled = filledbar(100, 50);

console.log("[" + split[0] + "] [" + split[1] + "%]\n\n");

console.log(filled[0] + " [" + filled[1] + "%]");