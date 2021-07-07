class Djikstra {
    constructor(dataInGraph){
    this.vertices = dataInGraph.vertices
    this.releasetionVertices = dataInGraph.releasetionVertices
}
showingThisGraph(){
    let vertices = this.vertices
    let releasetionVertices = this.releasetionVertices
    return(vertices, releasetionVertices)
}

shortestPath(from, to){
    let distenceTo = {}
    let previousVertices ={}
    let visitedCount = {}

    for(let i = 0; i < this.vertices.length; i++){
        if(this.vertices[i] === from){
            distenceTo[this.vertices[i]] = 0
        }else{
            distenceTo[this.vertices[i]] = Infinity
        }
        previousVertices[this.vertices[i]] = this.vertices[i]
        visitedCount[this.vertices[i]] = false
    }

    let showVisited = from

    while(showVisited !== null){
        let distences = distenceTo[showVisited]
        let edges = this.releasetionVertices[showVisited]
        for(const determinent in edges){
            console.log(determinent, 'check of distance')
        let newDistance = distences + edges[determinent]
        if(newDistance < distenceTo[determinent]){
            distenceTo[determinent] = newDistance
            previousVertices[determinent] = showVisited
        }
        }
        visitedCount[showVisited] = true
        // mencari distance yang kecil dan belum terkunjungi
        let minDistences = Infinity //inisiasi nilai default
        let showVertices = null // value kasih null
        for(const determinent in distenceTo){
            console.log('Proccess to searching')
            if(distenceTo[determinent] < minDistences && visitedCount[determinent] !== true){
                minDistences = distenceTo[determinent]
                showVertices = determinent
            }
        }

        showVisited = showVertices
    }
    console.log(distenceTo)
    console.log(previousVertices)
    console.log(visitedCount)

    return `${distenceTo[to]} from path ${previousVertices[to]}`
}


}
module.exports=Djikstra