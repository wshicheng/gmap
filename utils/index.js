export function siblings (elem) {
  var nodes = [] // 定义一个数组，用来存elem的兄弟元素
  var previ = elem.previousSibling
  while (previ) { // 先取o的哥哥们判断有没有上一个哥哥元素，如果有则往下执行previ表示previousSibling
    if (previ.nodeType === 1) {
      nodes.push(previ)
    }
    previ = previ.previousSibling // 最后把上一个节点赋给previ
  }
  nodes.reverse()
  var nexts = elem.nextSibling // 再取elem的弟弟
  while (nexts) { // 判断有没有下一个弟弟结点nexts是nextSibling的意思
    if (nexts.nodeType === 1) {
      nodes.push(nexts)
    }
    nexts = nexts.nextSibling
  }
  return nodes
}
