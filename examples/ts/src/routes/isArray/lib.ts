/**
 *
 * @param arg 未知类型
 * @returns 是否是数组
 */
function isArray(arg: unknown): boolean {
  return Array.isArray(arg);
}

isArray(1);
isArray([]);
