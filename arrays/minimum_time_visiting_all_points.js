function main(){
    console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]));
}

var minTimeToVisitAllPoints = function(points) {
    let count = 0;

    for(let i = 0; i < points.length-1; i++){
        //get the biggest possible difference
        let diff = Math.max(Math.abs(points[i][0] - points[i+1][0]), Math.abs(points[i][1] - points[i+1][1]));
        count += diff;
    }

    return count;
};

main();
