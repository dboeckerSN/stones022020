import { NettoPipe } from './netto.pipe';

describe('NettoPipe', () => {
  it('calculates netto correctly', () => {
    const pipe = new NettoPipe();
    const price = 214;
    const tax = 7;
    expect(pipe.transform(price, tax, 'netto')).toBe(200);
  });

  it('calculates brutto correctly if type brutto is passed', () => {
    const pipe = new NettoPipe();
    const price = 200;
    const tax = 10;
    expect(pipe.transform(price, tax, 'brutto')).toBeCloseTo(220);
  });

  it('calculates netto with tax 19 if no tax and no type is passed', () => {
    const pipe = new NettoPipe();
    const price = 119;
    expect(pipe.transform(price)).toBe(100);
  });
});
