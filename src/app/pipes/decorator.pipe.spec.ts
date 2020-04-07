import { DecoratorPipe } from './decorator.pipe';

describe('DecoratorPipe', () => {
  it('create an instance', () => {
    const pipe = new DecoratorPipe();
    expect(pipe).toBeTruthy();
  });
});
