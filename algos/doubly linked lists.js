class Node {
    constructor(val){
      this.val = val 
      this.next = null
      this.prev = null
    }
  }
  
  class DoublyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
  push(val){
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    }
    this.length++
    return this
  }
  
  pop(){
    if (this.head){
  let poppedNode = this.tail 
  if (this.head === this.tail){
    this.head === null
    this.tail === null 
  }
   } else {  
    if (!this.tail) {
      return false
    } else {
  poppedNode.prev = this.tail 
  this.tail.next = null 
    }
  this.length--
  return poppedNode
  }
  
    }
  
  shift(){
    let firstNode = this.head
     if (this.head === this.tail){
      this.tail = this.head = null 
     this.length--
     } 
     else if (this.head){
      this.head = this.head.next 
      this.head.prev = null 
    }  else {
      return false
    }
    this.length--
    return firstNode, this 
  }
  }
  
  unshift(val){
  if (!this.head){
    return this.push(val)
  }
  let newNode = new Node (val)
  newNode.next = this.head
  this.head.prev = newNode
  this.head = newNode
  this.length++
  return this
  }
  
  insertIndex(value, index){
  if (index === 0){
    return this.unshift(value)
  }
  else if (index === this.length) {
    return this.push(value)
  }
  else {
    let node  = this.head 
    for (let i = 0, i < index, i++)
    node = node.next
  }
  
  
  let list = new DoublyLinkedList()
  list.push(30)
  list.push(40)
  list.push(50)
  // list.push(40)
  // list.push(50)
  // console.log(list)
  // list.pop()
  // console.log(list)
  list.shift()
  list.shift()
  console.log(list.shift())