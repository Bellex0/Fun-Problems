class Node {
    constructor (val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  class BST {
    constructor (){
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while (true){
          if (val < current.val) {
            if (current.left == null){
              current.left = newNode;
              return this
            } else { current = current.left}
          } else if (val > current.val) {
            if (current.right == null){
              current.right = newNode;
              return this;
            } else {current = current.right}
          }
  }
      }
  search(val){
  
  }
  
  
  
  
  }
  
  let tree = new BST()
  tree.root = new Node(10)
  
  tree.root.left = new Node(8)
  tree.root.right = new Node(20)
  
  console.log(tree)