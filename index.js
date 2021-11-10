const txtgen = require('txtgen');
const sentence = txtgen.sentence;
const fs = require('fs');
const prompts = require('prompts');
process.title = 'Random Sentence generator by parakeet#0001'; // change this and you die (with help with 0J3 btw)

const i = setInterval(() => {
	console.log('Generating sentences');
}, 1000 * 60 * 60);

(async () => {
	const response = await prompts({
		type: 'number',
		name: 'randomsentence',
		message: 'Enter number of sentences here',
	});
	console.log('Generating Sentences');
	const sentenceCount = response.randomsentence; //amount of sentences in the txt
	for (let i = 0; i < sentenceCount; i++) {
		fs.appendFileSync('./sentences.txt', `${sentence().toString()}\n`);
	}
	clearInterval(i);
})();
