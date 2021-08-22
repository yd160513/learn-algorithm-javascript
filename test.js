// 二分查找 ---------------------------------------------------------------------------
// /**
//  * 在一个有序列表 list 中寻找 target, 存在则返回 target 在 list 中的索引，反之返回 -1
//  *  1. 初始化的时候获取一个开始的索引值 startIndex 和一个结束的索引值 endIndex，用来维护动态区间
//  *  2. 如果 startIndex <= endIndex 说明这个区间就是有值的，就需要取比对
//  *  3. 通过 (startIndex + endIndex) / 2 得到区间的中间的那个值对应的索引 middleIndex
//  *  4. 通过 middleIndex 获取对应的 middleValue
//  *  4. 用 middleValue 和 target 相比:
//  *    1. middleValue 和 target 相等则将 middle return
//  *    2. 如果 middleValue 大于 target，说明这个值比 target 大，然后将 middle - 1 赋值给 endIndex
//  *    3. 如果 middleValue 小于 target，说明这个值比 target 小，然后将 middle + 1 赋值给 startIndex
//  *    4. 然后再次循环判断
//  */
// /**
//  * 在一个有序的 list 中查找 target, 有则返回 target 对应的索引，反之返回 -1
//  * @param {array} list 有序 list
//  * @param {string | number} target 被查找的值
//  * @returns number
//  */
//  function search(list, target) {
//   // 定义一个区间，这个区间是动态的，每遍历一遍匹配不到值的话这个区间就会缩小，缩小就是通过改变 startIndex 和 endIndex 来缩小的。
//   let startIndex = 0
//   let endIndex = list.length - 1

//   // 因为是有序的，当 startIndex 一直小于 endIndex 的时候说明区间内一直有值，所以需要一直循环比较。当 startIndex > endIndex 的时候说明区间内没有值了，也就没有匹配到 return null
//   while (startIndex <= endIndex) {
//     // 根据区间来取中间数。这里为什么不采用 list.length 来取中，因为这个区间是动态的，而 list.length 是不变的
//     const middleIndex = (startIndex + endIndex) / 2
//     const middleValue = list[middleIndex]
//     // 中间值等于目标值
//     if (middleValue === target) {
//       return middleIndex
//     }
//     // 中间值大于目标值
//     else if (middleValue > target) {
//       // [1, 2, 3, 4, 5, 6, 7] 比如 middleValue 为 4，则新的区间应该为 1 - 3 了，所以 middleIndex - 1
//       endIndex = middleIndex - 1
//     }
//     // 中间值小于目标值
//     else if (middleValue < target) {
//       // [1, 2, 3, 4, 5, 6, 7] 比如 middleValue 为 4，则新的区间应该为 5 - 7 了，所以 middleIndex + 1
//       startIndex = middleIndex + 1
//     }
//   }
//   return -1
// }

// const list = [4, 8, 12, 33, 88, 99, 190]
// const target = 8
// const otherTarget = 10000
// console.log(search(list, otherTarget))

// 冒泡排序 ---------------------------------------------------------------------------
// /**
//  * 冒泡排序
//  * @param {array} list 无序的数字数组
//  * @returns list
//  * 1. 数组中的第一个和第二个比较，如果第二个比第一个大则两个交换位置，反之顺序保持不变。
//  * 2. 数组的第二个和第三个比较，规则同 1。
//  * 3. 一直比较到数组的最后一个。
//  * 4. 这个时候数组的最后一个肯定是最大的。
//  * 5. 然后再从 1 开始循环比较。
//  * 6. 再次开始比较的时候因为最后一个已经是最大的了，所以就不需要再次比较了。第一次是最后一个不需要比较，第二次是最后两个不需要比较...
//  */
//  function bubbleSort(list) {
//   // 一共有多少个元素需要比较，也就是一共要对比多少次
//   for (let j = 0; j < list.length - 1; j++) {
//     // 外层 for 循环只是告诉有多少个元素要比较，
//     // 这里的 for 循环开始比较，
//     // - j 的原因是：
//     //    当第一次比较完成之后，数组的最后一个肯定是最大的了，所以在下次就不需要比对最后一个了，
//     //    第一次是最后一个不需要比较，第二次是最后两个不需要比较...
//     //    外层循环的次数就是已经比对过的次数，也就是数组后边不需要比对的个数，所以将其减去
//     for (let k = 0; k < list.length - 1 - j; k++) {
//       // 如果第一个值比第二个值大的话则交换位置，反之顺序保持不变
//       if (list[k] > list[k + 1]) {
//         const temp = list[k]
//         list[k] = list[k + 1]
//         list[k + 1] = temp
//       } 
//     }
//   }
//   return list
// }
// const arr = [2, 8, 4, 5, 9, 0, 1]
// console.log(test(arr))

// 选择排序 ---------------------------------------------------------------------------
/**
 * 选择排序
 * @param {array} list 无序数组
 * @returns list
 * 
 * 假设第一个元素是当前数组中最小的，将其索引存起来
 * 继续遍历后边的元素，如果有其他元素小于记下的这个元素的话则将记下的元素索引替换为这个元素的索引，
 * 遍历完成一遍之后将记下的这个索引对应的元素替换至数组第一位，遍历完成第二遍后，将记下的元素替换值数组第二位，
 * 也就是说每遍历完成第几遍，替换的位置就是第几个
 */
 function test(list) {
  let cacheIndex
  const len = list.length
  /**
   * 问: 为什么外层循环的结束条件是 i < len - 1 而不是 i < len ?
   * 答: 这里也可以写成 i < len，但是 - 1 的原因是可以减少最后一次的无用循环。
   *    [2, 8, 4, 5, 9, 0, 1] 这么一个数组
   *    他的外层满足条件的最后一次循环是 i = 6，由于内层循环的起始值是 i + 1，
   *    也就导致了外层的这次循环根本就进入不了内层循环，因为 6 + 1 不小于 len，
   *    也正因为最后一次什么都没做，倒数第二次的结果其实是和最后一次的结果是一样的，
   *    所以也就可以让外层循环少做一次循环，也就是把 i < len 改为 i < len - 1
   */
  for (let i = 0; i < len - 1; i++) {
    console.log(`外层索引为${i}的循环`)
    cacheIndex = i
    for (let k = i + 1; k < len; k++) {
      console.log(`内层索引为${k}的循环`)
      const iVal = list[cacheIndex]
      const kVal = list[k]
      if (iVal > kVal) {
        cacheIndex = k
      }
    }
    // 当记下的值小于 i 的值时进行替换
    if (list[cacheIndex] < list[i]) {
      const temp = list[i]
      list[i] = list[cacheIndex]
      list[cacheIndex] = temp
    }
    
    console.log(`外层索引为${i}的循环后的 list =>`, list)
  }
  return list
}

const arr = [2, 8, 4, 5, 9, 0, 1]
console.log(test(arr))