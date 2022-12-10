function main(){
    console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));
}

var diagonalSum = function(mat) {
    let sum = 0;
    let i = 0;

    do{
        sum += mat[i][i];
        i !== mat.length - 1 - i ? sum += mat[i][mat.length - 1 - i] : sum += 0;
        i++;
    }while(i < mat.length);
    
    return sum;
};

main();