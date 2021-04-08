import demo from '../app';

test('return', () => {
  const expected = 'VG';
  const result = demo('VG');

  expect(result).toBe(expected);
});