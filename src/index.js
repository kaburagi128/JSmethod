/**
 * const,letの変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// // varは上書き可能
// vall = "var上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var再宣言";
// console.log(vall);

// letは上書き可能
// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// letは再宣言不可
// let val2 = "let再宣言";
// console.log(val2);

// constは上書き不可/再宣言不可
// const val3 = "const宣言";
// console.log(val3);

// val3 = "const上書き";
// console.log(val3);

// const val3 = "const再宣言";
// console.log(val3);

// constで作成してもオブジェクトのプロパティ変更は可能
// const val4 = {
//   name: "test",
//   age: "16"
// };
// console.log(val4);

// val4.name = "sasa";
// val4.address = "hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");

/**
 * テンプレート文字列
 */
// const name = "sasa";
// const age = "27";
// 私の名前はsasaです27です

// 従来の方法
// const message1 = "私の名前は" + name + "です" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };

// 引数が1つの場合は()を省略可能
// const func2 = () => {
//   return str;
// };

// 処理の記載をたん出することも可能
// const func2 = (num1,num2) => num1 + num2;
// console.log(func2(1,3))

/**
 * 分割代入法
 */

// const myprofile = {
//   name: "sasa",
//   age: "27"
// };
// const message4 = `これは${myprofile.name}です。年齢は${myprofile.age}`;
// console.log(message4);

// const { name, age } = myprofile;
// const message5 = `これは${name}です。年齢は${age}`;
// console.log(message5);

// const myprofile = ["sasaki", 30];
// const message6 = `これは${myprofile[0]}です。年齢は${myprofile[1]}`;
// console.log(message6);

// const [name, age] = myprofile;
// const message7 = `これは${name}です。年齢は${age}`;
// console.log(message7);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => {
//   return console.log(`こんにちは${name}さん`);
// };
// sayHello();

/**
 * スプレッド構文...
 */

// 配列の展開
// const art1 = [1, 2];
// console.log(art1);
// console.log(...art1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };

// sumFunc(art1[0], art1[1]);
// sumFunc(...art1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// console.log(arr3[1]);

// // 配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr5];
// console.log(arr6);
// arr6[0] = 100;

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// arr7[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "笹野"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// const nameArr3 = nameArr.map((name, index) => {
//   console.log(`${index + 1}番目${name}`);
//   return name;
// });

// const number = [1, 2, 3, 4, 5];
// const kisuu = number.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(kisuu);

// const newNameArr = nameArr.map((name) => {
//   if (name === "笹野") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const vall = 1 < 0 ? "true" : "false";
// console.log(vall);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "大丈夫";
// };
// console.log(checkSum(50, 20));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }

// if (flag1 && flag2) {
//   console.log("1と2はtrue");
// }

// ||は左側がfalseとなるとき右を返す。
// const num = 100;

// const fee = num || "金額は未設定";
// console.log(fee);

// // &&は左側がtrueとなるとき右を返す。
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
