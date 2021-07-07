class Minimumtree {
  constructor(vertices, edge, size) {
    this.vertices = vertices;
    this.edge = edge;
    this.size = size;
  }

  sort() {
    let edge = this.edge;
    let size = this.size;
    let temporary1, temporary2;
    for (let i = 1; i < size.length; i++) {
      let j = i;
      temporary1 = size[i];
      temporary2 = edge[i];
      while (j > 0 && temporary1 < size[j - 1]) {
        size[j] = size[j - 1];
        edge[j] = edge[j - 1];
        j--;
      }
      size[j] = temporary1;
      edge[j] = temporary2;
    }
    return {
      size,
      edge,
    };
  }

  MinimumST() {
    let edge = this.sort().edge;
    let size = this.sort().size;
    let vertices = this.vertices;

    let arr = [[edge[0], size[0]]];
    // console.log(arr)
    let arr1 = [];
    let l = 1;

    for (let k = 0; k <= arr.length - 1; k++) {
      for (let j = arr.length; j <= size.length - 1; j++) {
        if (l < vertices.length - 1) {
          for (let k = 0; k <= arr.length - 1; k++)
            if (
              edge[j][0] == arr[k][0].charAt(0) ||
              edge[j][0] == arr[k][0].charAt(1) ||
              edge[j][1] == arr[k][0].charAt(1) ||
              edge[j][1] == arr[k][0].charAt(0)
            ) {
              arr1.push(arr[k]);
              arr1.push([edge[j], size[j]]);
              console.log("in here looping :", arr1);
            }
          if (arr1.length == 0 || arr1.length == 1) {
            arr.push([edge[j], size[j]]);
            j = size.length;
            l++;
          } else {
            arr1 = [];
          }
        }
      }
    }
    console.log("this result :", arr);
  }

  Run() {
    this.MinimumST();
  }
}

module.exports = Minimumtree;
