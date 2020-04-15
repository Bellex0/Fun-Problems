// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

var diameterOfBinaryTree = function(root) {
    max=0;
   dfs(root);
   return max;
};

function dfs(node){
   if(node === null)
   {
       return 0;
   }
   var left = dfs(node.left);
   var right = dfs(node.right);
   
   max = Math.max(max,left+right);
   return Math.max(left, right)+1;
}