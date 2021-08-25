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
// /**
//  * 选择排序
//  * @param {array} list 无序数组
//  * @returns list
//  * 
//  * 假设第一个元素是当前数组中最小的，将其索引存起来
//  * 继续遍历后边的元素，如果有其他元素小于记下的这个元素的话则将记下的元素索引替换为这个元素的索引，
//  * 遍历完成一遍之后将记下的这个索引对应的元素替换至数组第一位，遍历完成第二遍后，将记下的元素替换值数组第二位，
//  * 也就是说每遍历完成第几遍，替换的位置就是第几个
//  */
//  function test(list) {
//   let cacheIndex
//   const len = list.length
//   /**
//    * 问: 为什么外层循环的结束条件是 i < len - 1 而不是 i < len ?
//    * 答: 这里也可以写成 i < len，但是 - 1 的原因是可以减少最后一次的无用循环。
//    *    [2, 8, 4, 5, 9, 0, 1] 这么一个数组
//    *    他的外层满足条件的最后一次循环是 i = 6，由于内层循环的起始值是 i + 1，
//    *    也就导致了外层的这次循环根本就进入不了内层循环，因为 6 + 1 不小于 len，
//    *    也正因为最后一次什么都没做，倒数第二次的结果其实是和最后一次的结果是一样的，
//    *    所以也就可以让外层循环少做一次循环，也就是把 i < len 改为 i < len - 1
//    */
//   for (let i = 0; i < len - 1; i++) {
//     console.log(`外层索引为${i}的循环`)
//     cacheIndex = i
//     for (let k = i + 1; k < len; k++) {
//       console.log(`内层索引为${k}的循环`)
//       const iVal = list[cacheIndex]
//       const kVal = list[k]
//       if (iVal > kVal) {
//         cacheIndex = k
//       }
//     }
//     // 当记下的值小于 i 的值时进行替换
//     if (list[cacheIndex] < list[i]) {
//       const temp = list[i]
//       list[i] = list[cacheIndex]
//       list[cacheIndex] = temp
//     }
    
//     console.log(`外层索引为${i}的循环后的 list =>`, list)
//   }
//   return list
// }

// const arr = [2, 8, 4, 5, 9, 0, 1]
// console.log(test(arr))

// 插入排序 ---------------------------------------------------------------------------
// /**
//  * 插入排序
//  * @param {array} list 无序数组
//  * @returns list
//  * 
//  * 将数组的第二个缓存起来，
//  * 从缓存起来的值开始向左挨个比较
//  */
// function test(list) {
//   console.log(`初始 list 为 =>`, list)
//   // 从数组的第2个值开始遍历
//   for (let i = 1; i < list.length; i++) {
//     // 将其缓存起来
//     const temp = list[i];
//     console.log(`第 ${i} 轮循环，缓存起来的值为 ${temp}`)
//     let index = i
//     // 从缓存的位置向左开始匹配
//     while (index > 0 && list[index - 1] > temp) {
//       list[index] = list[index - 1]
//       index--
//     }
//     // 所有大于 0 的都在 while 循环中做了，这里处理的是 index === 0 的时候
//     list[index] = temp
//     console.log(`第 ${i} 轮循环结束，list 为 ${list}`)
//   }

//   return list
// }

// const arr = [2, 8, 4, 5, 9, 0, 1]
// console.log(test(arr))


// 快速排序 ---------------------------------------------------------------------------
/**
 * 快速排序
 * @param {array} list 无序数组
 * @returns list
 * 
 * 1. 将数组中最后一个值作为轴存起来
 * 2. 设置开始和结束指针，这两个指针分别指向排除了轴的数组的最左边和最右边
 * 3. 先从开始指针也就是左侧指针和轴比较，如果指针对应的值比轴小则继续向右移动指针，如果比轴大则指针停止在当前位置
 * 4. 左侧指针停止之后，开始用结束指针也就是右侧指针和轴比较，如果指针对应的值大于轴则向左移动指针，如果指针小于轴则将指针停止在当前位置。
 * 5. 当右侧指针停下来之后，左右指针对应的值交换位置
 * 6. 循环 3 - 5 的步骤，直到左侧指针和右侧指针重叠或者左侧指针移动到了右侧指针的右边
 * 7. 左侧指针和轴对应的值互换位置
 * 8. 当轴的位置换完之后，轴在整个数组中的位置就确定了。 轴的左侧都是小于轴的值，轴的右侧都是大于轴的值。
 * 9. 轴的位置确定之后，也就分出了左侧和右侧两个子数组
 * 10. 利用这两个子数组再去调用 1 - 10 这些步骤
 * 11. 当分出的子数组的长度等 0 或 1 时则达到了基准情形也就是停止递归调用的条件
 * 
 * 注意点：
 * 1. 当左侧指针在向右移动的过程中，两个指针重合了，并且当前左侧指针对应的值大于轴的话，则不会对右侧指针进行移动，而是直接执行第 7 步(左侧指针和轴对应的值互换位置);
 *    反之当两个指针重合了，但是左侧指针小于轴的话则会继续向右移动左侧指针，这个时候左侧指针就会移动到右侧指针的右边，就会触发第 7 步(左侧指针和轴对应的值互换位置);
 * 2. 左侧指针在向右移动的时候，是有可能指向轴的，当指向轴的时候也就说明下一步就该执行第 7 步了
 */
function test(list) {
  // 确定一个轴
  const temp = list.length - 1
  const tempVal = list[temp]
  /**
   * 1. 这个时候需要两个变量来描述指针的位置。
   *    因为在后续的操作中，两个指针是会在数组中任意移动的，所以需要定义两个指针。
   * 2. 所说的设置两个指针的位置需要将轴排除出去，并不是真的将轴从数组中删除。
   *    这里所说的排除出去是指第一点声明的两个指针，这两个指针所包含的范围里边是不包含轴的。
   *    也正是因为第一点中提到的两个指针会在数组中任意移动，也就侧面说明了不能破坏原数组。
   */
  let start = 0;
  let end = temp - 1; // 这里的 - 1 就是将轴排除了出去，以为轴是最后一个，这里拿到的是倒数第二个

  
  

  return list
}

const arr = [2, 8, 4, 5, 9, 0, 1]
console.log(test(arr))

