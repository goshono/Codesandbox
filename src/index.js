/**
 * const, let等の変数宣言
 */
/**
 * ---------------
 * 古いJSの書き方
 * ----------------
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

/**
 * ---------------
 * letの書き方
 * ----------------
 */
// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "letを上書き";
// console.log(val2);

// // letは再宣言不可
// let val2 = "letを再宣言";

/**
 * ---------------
 * constの書き方
 * ----------------
 */
// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// val3 = "const変数を上書き";
// // constは再宣言不可
// const val3 = "const再宣言";

// constで定義したオブジェクト
// プロパティの上書き可能
// const val4 = {
//   name: "なまえ",
//   age: "20"
// };
// val4.name = "namae";
// val4.address = "tokyo";
// console.log(val4);

// constで定義した配列
// プロパティの上書き可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 *　テンプレート文字列
 */
// const name = "太郎";
// const age = 30;
// // 私の名前は太郎です。年齢は30歳です。
// //　従来の書き方
// const message1 = "私の名前は" + name + "年齢は" + age + "です.";
// console.log(message1);
// // テンプレート文字列(バッククォート)
// const message2 = `私の名前は${name}だよ。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("const func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 29));

/**
 * 分割代入
 */
/**
 * ---------------
 * オブジェクト
 * ----------------
 */
// const myProfile = {
//   name: "太郎",
//   age: "30"
// };
// // myProfileの構造が複雑だと値が取り出すのが大変
// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// // オブジェクトから指定のプロパティを抜き出す。
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);
/**
 * ---------------
 * 配列
 * ----------------
 */
// const myProfile = ["太郎", 30];
// const [name, age] = myProfile;
// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// const message3 = `名前は${name}だよ。年齢は${age}です`;
// console.log(message3);

/**
 * デフォルト値, 引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは。${name}さん`);
// sayHello();

/**
 * スプレッド構文　 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "佐藤"];
// 従来の書き方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件式 ? trueの時　　 : fasleの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
const num = "ああ";

const formattedNum = typeof num === "number" ? num : "数値をにゅうりょくしてや";
console.log(formattedNum);
