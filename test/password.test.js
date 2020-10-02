const password = require('../utils/password');

describe('samePassord()', () => {
  it('Should return true when password is the same', async () => {
    const encryptPassword = await password.encryptPassword('hello');
    expect(password.samePassord(encryptPassword, 'hello')).toBeTruthy();
  });

  it('Should return true when password is the same', async () => {
    const encryptPassword = await password.encryptPassword('hello');
    const isSame = await password.samePassord(encryptPassword, 'hell0');
    expect(isSame).toBeFalsy();
  });
});
