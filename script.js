//Big O Notation Examples:

//O(n) looping through an array arr:
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

//O(log n) Never looks at all the input values and solves in a fraction of the time
while (arr.length > 0) {  
    arr.length /= 2;  
 }  

//O(2^n) Fibonacci sequence should generally be avoided and tends to make things way out of proportion at higher scales
function Fibonacci(num) {
    if (num <= 1) {
       return num;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
 }
 
//______________________________________________________________________________________
//Arrays

//Creating an Array:
// Creating an empty array of board games
// let board_games = [];

//Inserting in to an Array(there are two methods for this):
//At Creation of the Array:
// Creating an array with 3 strings of board game names
// let board_games = ["Chess", "Risk", "Clue"];

//After Array is created using Push() method, adds to the end of the Array:
// Adding a new element to an existing array
board_games.push("Go");

//Traversing an Array(For Loop):
//uses the Arrays .length property to loop through the length of the Array
for (let i = 0; i < boardGames.length; i++) {
    console.log('Game ' + i + ': ' + boardGames[i]);
}

//Retrieving Items from an Array(using index positions starting at index 0):
//To retrieve an item from the array, we can use square bracket notation [] followed by the index position of the item we want
let board_games = ["Chess", "Risk", "Clue"];
let third_game = board_games[2];
console.log(third_game); // Output: "Clue"

//Updating Items in an Array(using the assignment operator to update):
//Example- If we wanted to replace "Clue" with "Checkers", we would use this syntax:
board_games[2] = "Checkers";

//Array Data type change examples:
//Change leads to objects properties being undefined
var chess = { num_players: 2, name: "Chess" };
var risk = { num_players: 6, name: "Risk" };
var clue = { num_players: 6, name: "Clue", available: true };

// Build array of object type variables
var board_games = [ chess, risk, clue ];

// Change type of second element to a string
board_games[1] = "not an object"; 

// Print out the values of each object in array
for (var game of board_games) {
    console.log(`${game.num_players}: ${game.name}`)
}

// Output:
// 2: Chess
// undefined: undefined
// 6: Clue

//In this the Array will function as expected:
board_games[2].num_players = "not a number"

// Print out the values of each object in array
for (const game of board_games) {
    console.log(`${game.num_players}: ${game.name}`)
}
// Output:
// 2: Chess
// 6: Risk
// not a number: Clue

//Removing Items from an Array(using indexOf method to find index and splice method to remove):
let board_games = ["Chess", "Checkers", "Risk", "Go"];
let index = board_games.indexOf("Checkers");
board_games.splice(index, 1);

console.log(board_games);

//Multi-Dimensional Arrays:
//2d Arrays(it can be two Arrays in an Array or two Arrays in a parenthesis):
// let twoDimensionalArray = [
//     [1, 2, 3],
//     [4, 5, 6]
//   ];
  //or 
//   let twoDimensionalArray = new Array([1, 2, 3], [4, 5, 6]);
//We can also initialize the array by creating an empty array and adding elements using index positions within square brackets:  
let twoDimensionalArray = [];
twoDimensionalArray[0] = [];
twoDimensionalArray[0][0] = 1;
twoDimensionalArray[0][1] = 2;
twoDimensionalArray[0][2] = 3;
twoDimensionalArray[1] = [];
twoDimensionalArray[1][0] = 4;
twoDimensionalArray[1][1] = 5;
twoDimensionalArray[1][2] = 6;
//Another way to represent this in JavaScript is like this:
[
    [1,2,3],
    [4,5,6]
]
//To access an element in a 2D array, we use two sets of square brackets.
//The index in the first set of square brackets indicates the row index, and the second set of square brackets indicates the column index.
//For example, to access an item in the second column of the first row, we would use the following syntax:
twoDimensionalArray[0][1]

//3d Array(To create a three-dimensional array, we can nest another level of arrays within the 2D array):
//Each element in the 3D array can be accessed using three indices, where the first index represents the index of the 2D array, the second index represents the row index, and the third index represents the column index
let threeDimensionalArray = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [7, 8, 9],
      [10, 11, 12]
    ]
  ];

//______________________________________________________________________________________ 
//Linked Lists
//Linked Lists are commonly used for implementing Stacks, Queues, Trees, Graphs, and Hash Tables
//Example:
// const linked_list_example ,{
//     head: { // the head is the first node in the list
//       data: 2 // first value, type int
//       next: {
//           data: "string value" // second value, type string
//           next: {
//             data: 2.5 //third value, type float
//             next: null // the last node will always be null
//           }
//         }
//       }
//     };
  

//Singly Linked Lists - The Most Basic Linked List
//To create we need 1 data and 2 a node
//Node Class (data: the data value held in the node, next: a pointer to the next node in the list)
class Node {
  constructor(d) {
      this.data = d;
      //data property is set to the data that is passed
      this.next = null;
      //next points to what is next, NOT always null
  }
}
//LinkedList Class 
//The LinkedList class represents the entire linked list. It contains one property:
//head: a pointer to the first node in the list
//Size: a variable to hold the size of the list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; //Optional, this is how to track the size of the LinkedList
  }
}
//Using the List and Node Classes
//To add nodes to the linked list, we can create instances of the Node class and set the next property of the previous node to the new node
//Example:
const list = new LinkedList();
list.head = new Node(1);
//set the head property to the first node
list.head.next = new Node(2);
//set the next property of the first node to the second node
list.head.next.next = new Node(3);
//and the next property of the second node to the third node
//Here's an example of how these console log:
console.log(list.head.data); // first output:  100
console.log(list.head.next.data); // second output: 5
console.log(list.head.next.next.data); // third output: 500
//Traversing the Linked List using a While Loop
//We can easily traverse the list using a while loop by starting with the head node
//continuing through each next node until we reach the last node
//last node in the list next pointer will be null
//Here is an example of traversing the list:
let currentNode = list.head;

while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

//Insert Operation on Singly Linked Lists
//Here's an example code for a few different ways you could use the insert operation
//At the beginning
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNodeAtBeginning(data) {
// create a new node with the given data
    const node = new Node(data);

// set the new node's "next" pointer to the current head node
    node.next = this.head;
// update the head to point to the new node    
    this.head = node;
    this.size++;
  }

  insertNodeAtEnd(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;

      while (tail.next) {
        tail = tail.next;
      }

      tail.next = node;
    }

    this.size++;
  }

  insertNodeInMiddle(prevNode, data) {
    if (!prevNode) {
      this.insertNodeAtBeginning(data);
      return;
    }

    const node = new Node(data);
    node.next = prevNode.next;
    prevNode.next = node;
    this.size++;
  }
}

//Insert Node at the End
function insertNodeAtEnd(data) {
  const newNode = new Node(data);
//Allocate memory for the new node
//Store data in the new node

  // If the list is empty, set the new node as the head
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let currentNode = this.head;

  // Traverse the list until we find the last node
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  // Set the `next` property of the last node to point to the new node
  currentNode.next = newNode;
}

//Insert Node in the Middle
//This is the most challenging insert function as we need to know both the node's position and value
//Here's the general process for inserting a node in the middle of a singly linked list:
//1 Check if the given node is null - if it is, we cannot insert a new node at that position and should return
//2 Create a new node with the provided data
//3 Set the next pointer of the new node to the next pointer of the previous node
//4 Set the next pointer of the previous node to the new node
//5 Return the modified linked list

//Example:
function insertInMiddle(prevNode, data) {
  if (!prevNode) {
    return; // cannot insert at null node
  }

  const newNode = new Node(data);

  newNode.next = prevNode.next;
  prevNode.next = newNode;

  return this.head; // return the modified linked list
}

//Delete Operation on Singly Linked Lists

//Case 1: Delete First Node
//Deleting a node at the beginning of a linked list:
//1 Create a function called deleteNodeAtBeginning()
//2 Check if the head of the linked list is null. If it is, return null because there is nothing to delete
//3 If the head is not null, then create a variable called temp and set it to the head node
//4 Set the head node to the next node in the linked list
//5 Delete the temp node by setting its value to null
//6 Return the new head node
//Example Implementation:
function deleteNodeAtBeginning() {
  if (!this.head) {
    return null;
  }

  let temp = this.head;
  this.head = temp.next;
  temp = null;
  return this.head;
}

//Case 2: Delete Last Node
//Deleting a node at the end of a linked list:
//1 Create a function called deleteNodeAtEnd()
//2 Check if the head of the linked list is null. If it is, return null because there is nothing to delete
//3 If the head is not null, then create two variables called temp and prev. Set temp to the head node and prev to null
//4 Traverse the linked list until temp is the last node in the list. To do this, set prev to temp and temp to temp.next in a loop until temp.next is null
//5 Set prev.next to null to remove the last node from the list
//6 Delete the temp node by setting its value to null
//7 Return the head node
//Example Implementation:
function deleteNodeAtEnd() {
  if (!this.head) {
    return null;
  }

  let temp = this.head;
  let prev = null;

  while (temp.next) {
    prev = temp;
    temp = temp.next;
  }

  prev.next = null;
  temp = null;

  return this.head;
}

//Case 3: Delete Middle Node
//Deleting a node in the middle of a linked list:
//1 Create a function called deleteNodeInMiddle(position)
//2 Check if the head of the linked list is null. If it is, return null because there is nothing to delete
//3 If the head is not null, then create two variables called temp and prev. Set temp to the head node and prev to null
//4 Traverse the linked list until temp is the node at the specified position
//To do this, use a loop to set prev to temp and temp to temp.next until the current position is equal to the specified position
//5 Set prev.next to temp.next to remove the current node from the list
//6 Delete the temp node by setting its value to null
//7 Return the head node
//Example Implementation:
function deleteNodeInMiddle(position) {
  if (!this.head) {
    return null;
  }

  let temp = this.head;
  let prev = null;
  let currentPosition = 1;

  while (temp && currentPosition !== position) {
    prev = temp;
    temp = temp.next;
    currentPosition++;
  }

  if (!temp) {
    return null;
  }

  if (!prev) {
    this.head = temp.next;
  } else {
    prev.next = temp.next;
  }

  temp = null;

  return this.head;
}

//Deleting Complete Linked List
//To delete a complete linked list, you need to traverse the list and delete each node one by one
//Example Implementation:
function deleteLinkedList(head) {
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = null;
    current = next;
  }

  head = null;
  return head;
}




