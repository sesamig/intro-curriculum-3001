'use strict';
/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number} result
 */
function factorial(n) {
    
    // 戻り値の初期化 
    let result = 1;

    // 階乗の処理
    for ( let  intcnt = 1 ; intcnt <= n ; intcnt ++ ){
        result *= intcnt;
    }
    
    // 戻り値を返す 
    return result;

}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10)}でした`);
console.log('すべてのテストを通過しました');
