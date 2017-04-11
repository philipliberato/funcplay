import _ from 'lodash';
import assert from 'assert';

const log = (msg) => console.log(msg);

const match = _.curry((what, str) => str.match(what));
const replace = _.curry((what, replacement, str) => str.replace(what, replacement));
const filter = _.curry((f, ary) => ary.filter(f));
const map = _.curry((f, ary) => ary.map(f));

let res = [];

res.push(match(/\s+/g, 'hello world'));
res.push(match(/\s+/g)('hello world'));

const hasSpaces = match(/\s+/g);

res.push(hasSpaces('hello world'));
res.push(hasSpaces('spacesless'));

res.push(filter(hasSpaces, ['tori_spelling', 'tori amos']));

const noVowels = replace(/[aeiouy]/ig);
const censored = noVowels('*');

res.push(censored('Chocolate Rain'));

const expected = [[' '], [' '], [' '], null, ['tori amos'], 'Ch*c*l*t* R**n'];

assert.deepEqual(res, expected);
