// nameを受け取ってhello<mame>を返す

import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('Hello taka', () => {
    const greeter = new Greeter();
    expect(greeter.greet('taka')).toBe('Hello taka');
    expect(greeter.greet('Doone')).toBe('Hello Doone');
  });
});

describe('Greeter', () => {
  it.each([
    ['Taka', 'Hello Taka'],
    ['daniel', 'Hello daniel'],
  ])('say hello $name', (name, expected) => {
    const greeter = new Greeter();
    expect(greeter.greet(name)).toBe(expected);
  });
});

/*it.eachは、Jestでテストケースを繰り返し実行するための便利な方法だよ！
 複数のテストデータを使って同じテストを実行したい場合に使われるんだ。

it.eachは、テストデータを表形式（テンプレートリテラル）や配列形式で渡すことができるよ。
 どちらの方法でも、繰り返しのたびにテスト関数にデータが渡されるから、
 一度に複数のテストケースを実行できるんだ！ */
