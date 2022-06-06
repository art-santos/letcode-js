function main(){
    console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]));
}

var minMovesToSeat = function(seats, students) {
    seats = seats.sort((a,b) => a-b);
    students = students.sort((a,b) => a-b);
    let acc = 0;
    seats.forEach((item, index) => {
        acc += Math.abs(item - students[index]);
    })
    return acc;
};

main();