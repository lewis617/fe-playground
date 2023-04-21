/**
 * 索引类型、约束类型
 * 注意，约束类型（extends）要放到尖括号里，索引类型（keyof）可以用来枚举对象的 key，配合约束类型，可以生成 key 的泛型
 */
function getValue<T extends object, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key];
}
getValue({ a: 1 }, 'a');
// 报错
// getValue(1, 'a');
