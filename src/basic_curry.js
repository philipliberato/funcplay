import _ from 'lodash';
import assert from 'assert';

const match 	= _.curry((what, str) => str.match(what));
const replace 	= _.curry((what, replacement, str) => str.replace(what, replacement));
const filter 	= _.curry((f, ary) => ary.filter(f));
const map 	= _.curry((f, ary) => ary.map(f));

const hasSpaces = match(/\s+/g);
const noVowels 	= replace(/[aeiouy]/ig);
const censored 	= noVowels('*');

const actual = []
	.concat(match(/\s+/g, 'hello world'))
	.concat(match(/\s+/g)('hello world'))
	.concat(hasSpaces('hello world'))
	.concat(hasSpaces('spacesless'))
	.concat(filter(hasSpaces, ['tori_spelling', 'tori amos']))
	.concat(censored('Chocolate Rain'));

const expected = [' ', ' ', ' ', null, 'tori amos', 'Ch*c*l*t* R**n'];

assert.deepEqual(actual, expected);
