import { analyzeArray } from './analyzeArray';

describe('analyze array', () => {
  it('average', () => {
    const avg = 3.3333;
    const res = analyzeArray([5, 3, 2]);
    expect(res.average).toBeCloseTo(avg);
  });

  it('min', () => {
    const min = 2;
    const res = analyzeArray([5, 3, 2]);
    expect(res.min).toBe(min);
  });
    
   it('max', () => {
     const max = 5;
     const res = analyzeArray([5, 3, 2]);
     expect(res.max).toBe(max);
   });
    
     it('length', () => {
       const length = 3;
       const res = analyzeArray([5, 3, 2]);
       expect(res.length).toBeCloseTo(length);
     });
});
