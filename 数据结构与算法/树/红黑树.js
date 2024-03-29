/*
红黑树,除了符合二又搜索树的基本规则外，还添加了-
特性:
1. 节点是红色或黑色
2. 根节点是黑色。
3. 每个叶子节点都是黑色的空节点( NIL节点 )。
4. 每个红色节点的两个子节点都是黑色。(从每个叶子到根的所有路径上不能有两个连续的红色节点)
5. 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点

红黑树保持平衡的方法：
变色、左旋转、右旋转
*/