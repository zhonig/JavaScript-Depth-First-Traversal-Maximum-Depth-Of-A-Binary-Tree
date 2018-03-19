"use strict";

function Node() {
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;

  return this;
}

function makeNode(data, left, right) {
  var node = new Node();
  node.data = data;
  node.left = left;
  node.right = right;

  if (node.left) {
    // Set this node as parent of left child
    node.left.parent = node;
  }

  if (node.right) {
    // Set this node as parent of right child
    node.right.parent = node;
  }

  return node;
}

function constructTree() {
  return makeNode(1,
                  makeNode(2,
                          makeNode(4,
                                  makeNode(8, null, null),
                                  makeNode(9, null, null)),
                          makeNode(5,
                                  makeNode(10, null, null),
                                  makeNode(11, null, null))),
                  makeNode(3,
                          makeNode(6, null, null),
                          makeNode(7,
                                  makeNode(12, null, null),
                                  makeNode(13, null, null))));
}
//             1
//        2        3
//      4   5    6    7
//     8 9 10 11     12 13


function maxDepth(rootNode) {
	console.log('printDepthOrder');
	
	if(!rootNode) return;
  
	var fringe = [{ node: rootNode, depth: 1 }];
    var current = fringe.pop();
    var max = 0;

    while (current && current.node) {
        var node = current.node;
        
        // Find all children of this node.
        if (node.left) {
            fringe.push({ node: node.left, depth: current.depth + 1 });
        }
        if (node.right) {
            fringe.push({ node: node.right, depth: current.depth + 1 });
        }
    
        if (current.depth > max) {
            max = current.depth;
        }
		
		console.log(node.data);
        
        current = fringe.pop();
    }

    return max;
}

var rootNode = constructTree();
console.log("Max Depth of Tree is:", maxDepth(rootNode));