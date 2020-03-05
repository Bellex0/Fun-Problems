class Node {
    constructor(val){
      this.val = val 
      this.next = null
    }
  }
  
  let firstNode = new Node(5)
  let fakeNode = new Node(10)
  firstNode.next = secondNode 
  
  class SinglyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    push(val){
      let addNode = new Node(val)
  
      if (!this.head){
        this.head = addNode 
      } else {
      this.tail.next = addNode
      }
      this.tail = addNode 
      this.length++
      }
  }
  
  pop(){
  //  #Remove last element in the sLL and return value. if LL is empty, return null
  let curr = this.head 
  let prev = this.head 
  if (this.length === 1){
    this.head = this.tail = null
    this.length--
    return curr
  }
  while (curr){
    if (!curr.next) {
      prev.next = null 
      this.tail = prev 
      this.length--
      return curr
    }
    prev = curr 
    curr = curr.next
  }
  return null
  }
  
  get(index){
    let currentNode = this.head
  let prev = this.head
    for (let i = 0; i < idx + 1; i++){
      if(idx == i){
        return curr 
      }
      curr = curr.next
    }
    
  }
  // another way to do get method
  get(index){
    if (index < 0 || index >= this.length){
      return null
    }
    let counter = index 
    let curr = this.head 
    while (counter){
      counter--
      curr = curr.next
    }
    return curr 
  }
  
  set(index, value){
    let counter = index 
    let curr = this.head
    while (counter){
      counter--
      curr = curr.next
    }
    curr.val = value
    return curr.val
  }
  
  let returnedNode = this.get(index)
  if (!returnedNode){
    return false
  returnedNode.val = value 
  return true 
  }
  
  print(){
    let array = []
    // let sll = new SinglyLinkedList()
    for (let i = 0; i < this.length-1; i++ ){
      array.push(this.head.val)
    }
    console.log(array)
  }
  
  let arr = []
  let node = this.head
  while (node){
    arr.push(node.val)
    node = node.next
  }
  arr.push('null')
  console.log(arr.join(' -> '))
  
  let value = ''
  let pointer = this.head 
  while (pointer){
    value += '${pointer.val} -> '
    pointer = pointer.next
  }
  return value + 'null'
  }
  
  
  // if (this.length === 0){
  //   return null 
  // } else {
  //   let node = this.head
  
//   remove node in the middle, 
//   check if LL has loop inside, loop detection
//   reverse sll
  