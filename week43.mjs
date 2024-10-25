// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {

    const TREE = {
        LEAVES: "*",
        ROOT: "x",
        SPACE: " ",
    };
    

    for (let i = 0, j = 1; i < height; i++, j+=2) {
        if (i < height - 1) {
            console.log(TREE.SPACE.repeat(height - i) + TREE.LEAVES.repeat(j))
        } 
        else (console.log(TREE.SPACE.repeat(height) + TREE.ROOT));
        }
    }


drawTree(5);
/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");
function drawArrow(size) {

    const ARROW = {
      STAR: "* ", 
    };
    
     for (let i = 1, j = size + size - 1; i <= size + size - 1; i++, j--) {
        if (i < size) {
            console.log(ARROW.STAR.repeat(i))
        } 
        else
            console.log(ARROW.STAR.repeat(j));
    }
}

drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawSquare(n, m) {
    let topRowStartEnd = "+";
    let topRow = "----";
    let downColumn = "|";
    let empty = "    ";
    console.log(topRowStartEnd + topRow.repeat(n) + topRowStartEnd);
    for (let i = 0; i < m; i++) {
        console.log(downColumn + empty.repeat(n) + downColumn);
         
    }
    console.log(topRowStartEnd + topRow.repeat(n) + topRowStartEnd);
}

drawSquare(2, 2);

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function heterogramCheck(word) {
   
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] == word[j]) {
                return false
            }
        }
    } 
    return true
} 

console.log(heterogramCheck("cat"));
console.log(heterogramCheck("ball"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function anagramCheck(word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");
    word1 = word1.sort();
    word2 = word2.sort();
    word1 = word1.join("");
    word2 = word2.join("");
    if (word1.length != word2.length) {
        return false
    } else if (word1 == word2) {
        return true
    } else return false
} 

console.log(anagramCheck("carssarc", "scarscar"));