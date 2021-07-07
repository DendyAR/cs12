const MinimumSpainingtree = require('./function')

let vertices = ['A','B','C','D','E','F','G']
let edge = ['AB', 'AC', 'AD', 'BD', 'BE', 'CD', 'CG', 'DF', 'EF', 'EG', 'FG']
let size = [16, 22, 25, 14, 26, 9, 35, 24, 15, 28, 8]
let result =  new MinimumSpainingtree(vertices, edge, size)
result.Run()