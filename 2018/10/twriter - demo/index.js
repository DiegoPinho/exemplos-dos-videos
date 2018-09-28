const TypeWriter = require('t-writer.js');

const target = document.getElementById('text');
const writer = new TypeWriter(target, {
	loop: true,
	typeColor: 'blue'
});

writer
	.type('Muito obrigado por conferir este código!')
	.rest(500)
	.start();