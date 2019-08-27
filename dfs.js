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
