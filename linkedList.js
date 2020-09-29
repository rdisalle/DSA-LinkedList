class _Node {
    constructor(value, next) {
      this.value=value;
      this.next=next;
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(newItem, nextItem) {
        let currNode = this.head;
        let previousNode = this.head;
        if (!this.head) {
            return null;
        }
        if (this.head.value === nextItem) {
            this.insertFirst(newItem);
          }
        while ((currNode !== null) && (currNode.value !== nextItem)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
          }
        else {let newNode = new _Node(newItem, previousNode.next)
        previousNode.next = newNode;
            return;
        }
  }
    insertAfter(newItem, prevItem) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while ((currNode !== null) && (currNode.value !== prevItem)) {
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        if (prevItem.next === null) {
            this.insertLast(newItem);
            return;
          }
        else {let newNode = new _Node(newItem, currNode.next)
        currNode.next = newNode;
            return;
        }
    }
    insertAt(newItem, pos) {
        let currNode = this.head;
        let stepper = 0;
        if (!this.head) {
            return null;
        }
        while (stepper !== pos) {
            stepper++;
            currNode = this.head.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
          }
        if (stepper === pos) {
            this.insertAfter(newItem, currNode.value);
            return;
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertCycle(newItem, nextItem) {
        let currNode = this.head;
        let previousNode = this.head;
        let prevPrevNode = this.head;
    
        while((currNode !== null) && (currNode.value !== nextItem)) {
          prevPrevNode = previousNode;
          previousNode = currNode;
          currNode = currNode.next;
        }
    
        let newNode = new _Node(newItem, prevPrevNode);
        previousNode.next = newNode;
      }
}

//Supplemental functions for a linked list
//Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods 
//of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

//display: displays the linked list
//size: returns the size of the linked list
//isEmpty: finds if the list is empty or not (without using the size() function)
//findPrevious: finds the node before the item you are looking for
//findLast: returns the last node in the linked list

function display(SLL) {
    let currNode = SLL.head;
    let currTotal = SLL.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
      currTotal += currNode.value;
    }
    console.log(currTotal);
  }

function size(SLL) {
    let currNode = SLL.head;
    let nodeSize = 0;
    while (currNode !== null) {
        currNode = currNode.next
        nodeSize++
    }
    console.log(nodeSize);
}

function isEmpty(SLL) {
    let empty = true;
    if (SLL.head !== null) {
        empty = false;
    }
    console.log(empty);
}

function findPrevious(SLL, item) {
    let currNode = SLL.head;
    let previousNode = SLL.head;
    let stepper = 1;
  
    if (item <= 0) {
      console.log('Node must be greater than 0');
      return;
    }
  
    while (stepper < item) {
      if (currNode === null) {
        console.log('Boundary error');
        return;
      }
      stepper++;
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (previousNode === null || item === 0) {
      console.log('Item not found');
      return;
    }
    console.log(previousNode.value);
    return;
  }

function findLast(SLL) {
    let currNode = SLL.head
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    console.log(currNode.value);
};


//Reverse a list
//Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice 
//we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program 
//should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using 
//both recursive and iterative algorithms.

function reverseList(SLL) {
    if (SLL.head === null) {
      console.log('Linked list contains no values');
      return;
    }
  
    let currNode = SLL.head;
    let prevNode = null;
    let tempNode = currNode;
  
    while(currNode !== null){
      tempNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = tempNode;
    }
    SLL.head = prevNode;
    return display(SLL);
  }

//3rd from the end
//Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class.
//The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.
function thirdFromEnd(SLL) {
    if (SLL.head === null) {
        console.log('Linked list contains no values');
        return;
      }
    
    let currNode = SLL.head;
    let prevNode = null;
    let prevPrevNode = null;

    while (currNode.next !== null) {
        prevPrevNode = prevNode; 
        prevNode = currNode;
        currNode = currNode.next;
    }
    if(prevPrevNode === null) {
        console.log('List too short');
        return;
    }
    console.log(prevPrevNode.value);
    return prevPrevNode.value;
}

//Middle of a list
//Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. 
//The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided 
//to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. 
//So, don't use either of these approaches.
function middleOfList(SLL) {
    if(SLL.head === null) {
      console.log('List is empty');
      return;
    }
  
    let currNode = SLL.head;
    let stepper = 1;
    while(currNode.next !== null) {
      currNode = currNode.next;
      stepper++;
    }
    let middle = Math.ceil(stepper/2);
    stepper = 1;
    currNode = SLL.head;
    while(stepper < middle) {
      stepper++;
      currNode = currNode.next;
    }
    console.log(currNode.value);
    return currNode;
}

//Cycle in a list
//Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). 
//For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a 
//cycleList function.
function cycleFinder(CycleList) {
    let slowNode = CycleList.head;
    let fastNode = CycleList.head;
  
    while(slowNode.next && slowNode) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
      if(slowNode === fastNode) {
        isCycle = true;
      }
      else {isCycle = false;}
    }
    console.log(isCycle);
  }

function cycle() {
    let CycleList = new LinkedList();
    CycleList.insertFirst(1);
    CycleList.insertLast(2);
    CycleList.insertLast(3);
    CycleList.insertLast(4);
    CycleList.insertLast(5);
    CycleList.insertCycle(6);
    cycleFinder(CycleList);
    console.log(CycleList);
}
cycle();

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('cat', 3);
    SLL.remove('Tauhida');
    display(SLL);
    size(SLL);
    isEmpty(SLL);
    findPrevious(SLL, 'Boomer');
    findLast(SLL);
    //reverseList(SLL);
    thirdFromEnd(SLL);
    middleOfList(SLL);
    console.log(SLL);
}
main();

//Mystery program
//Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//This function is looking duplicate list items and removing the duplicate. Big O is O(n^2)
