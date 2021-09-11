type Address = {
  country: string;
  postalCode: string;
  address1: string;
};

const address = new Map<string, Address>();
// Map<K, V>は、K にキーの型を指定する。V にキーに紐づいてる型を指定する。
// 今回の場合でいうと、キーはstringの型
// そのバリューにはtypeエイリアスのAddressの型を入れる。

address.set("Tatsu", {
  // setメソッドは、第一引数には、キーを
  // 第二引数には、そのキーに対応するバリューを入れる。
  // 今回でいうとオブジェクトを入れたいから、第二引数にオブジェクトリテラルで書いてる。
  country: "Japan",
  postalCode: "214-0036",
  address1: "Kanagawa"
});

// console.log(address.size);
console.log(address.get("Tatsu"));
// get()は、setで定義したものの呼び出しを行う。
// どのキーを呼び出すかを引数内に記述する必要がある。
