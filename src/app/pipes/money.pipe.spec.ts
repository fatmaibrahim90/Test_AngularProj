import { MoneyPipe } from './money.pipe';

describe('MoneyPipe', () => {
  let moneyPipe: MoneyPipe;

  beforeEach(() => {
    moneyPipe = new MoneyPipe();
  });

  it('should multiply input by 60', () => {
   
    expect(moneyPipe.transform(5)).toEqual(5 * 60);
  });

 
  // your transform method returns a string
  it('should return a number', () => {
    const result = moneyPipe.transform(8);
    expect(typeof result).toEqual('number');
  });
});
