import { chichi } from '../src';

it('chichi testing', async() => {
  const randomNumber = chichi(10, 20);
  expect(randomNumber < 10).toEqual(false);
  expect(randomNumber > 20).toEqual(false);
});
