function main(){
    console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
}

var restoreString = function(s, indices) {
    let new_arr = [];
    let split_str = s.split('');

    for (i in indices){
        new_arr[indices[i]] = split_str[i];
    }

    return new_arr.join('');
};

main();