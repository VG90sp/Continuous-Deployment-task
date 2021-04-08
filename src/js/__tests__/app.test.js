import demo from '../app';

// eslint-disable-next-line no-undef
test('return', () => {
  const expected = 'VG';
  const result = demo('VG');

  // eslint-disable-next-line no-undef
  expect(result).toBe(expected);
});
