var neighbors = new NeighborGenerator(10);
const message = document.querySelector('p');

var grid = new Grid("grid",600);
grid.draw(10);
function solve() {
    var start = grid.getStart();
    var end = grid.getEnd();
    neighbors.skips = grid.getSkips();
    var map = neighbors.buildMap(true);

    var dijkstra = new Graph(map);
    var solution = dijkstra.findPath(start,end);
    if(solution != undefined){
        grid.drawSolution(solution);
    } else {
        message.innerText = "Não há solução.";
    }
}