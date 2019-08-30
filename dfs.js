class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdges(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {}

  bfs(startingNode) {
    var visited = [];
    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
      var q = new queue();
      q.enqueue(startingNode);

      while (!q.isEmpty()) {
        var getQueueEelement = q.dequeue();

        var get_list = this.AdjList.get(getQueueEelement);

        for (var i in get_list) {
          var neigh = get_list[i];
          if (!visited[neigh]) {
            visited[neigh] = true;
            q.enqueue(neigh);
          }
        }
      }
    }
  }

  dfs(vertice, visited) {
    visited[vert] = true;
    var get_neigh = this.AdjList.get(vertice);

    for (var i in get_neigh) {
      var get_element = get_neigh[i];
      if (!visited[get_element]) {
        this.dfs(get_element, visited);
      }
    }
  }
}

// method 2

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value
  }
  addNode(value) {
    //check if the current node has a value;
    if(this.value === null) {
      this.value = value;
    }
​
    else if(value <= this.value) {
      if (this.left === null) {
        //insert here
        this.left = new Node(value)
      } else {
        //recursive call
        this.left.addNode(value)
      }
    }
    else if(value >= this.value) {
      if (this.right === null){
        //insert here
        this.right = new Node(value)
      } else {
        //recursive call
        this.right.addNode(value)
      }
    }
  };
​
  printTree() {
    if (this.left) {
      this.left.printTree();
    }
​
    if (this.right) {
      this.right.printTree();
    }
​
    console.log(this.value);
​
    return
  }
}
​
const tree = new Node(4);
tree.addNode(5);
tree.addNode(10);
tree.addNode(2);
tree.addNode(18);
​
tree.printTree();
