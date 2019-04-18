
import Test from '~/lib/moduleTest';

describe('test1', () => {
  it('test1 it', async () => {
    // expect(Test instanceof Promise).toBe(true);    
    expect(Test() instanceof Promise).toBe(true);
  });
});
