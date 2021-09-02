const regex = [
  '^\\u0000',
  '^@?\\w',
  '^(?!(components|src))',
  '^(components|src|\\.)',
  '^(?=@?\\w)(?!(components|src))',
];

function test () {
  for (const regg of regex) {
    const reg = new RegExp(regg);
    console.log(reg);
    console.log('null       ', reg.test(null));
    console.log('\\abc       ', reg.test('\\abc'));
    console.log('abc        ', reg.test('abc'));
    console.log('           ', reg.test(''));
    console.log('@abc       ', reg.test('@abc'));
    console.log('components ', reg.test('components'));
    console.log('componen   ', reg.test('componen'));
    console.log('!components', reg.test('!components'));
    console.log('src/abc    ', reg.test('src/abc'));
    console.log('!src/abc   ', reg.test('!src/abc'));
    console.log('../abc     ', reg.test('../abc'));
    console.log('./abc      ', reg.test('./abc'));
    console.log('@/abc      ', reg.test('@/abc'));
  }
}

test();
