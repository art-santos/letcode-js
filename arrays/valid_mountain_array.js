function main(){
    console.log(validMountainArray([3,4,5,2,1]));
}

var validMountainArray = function(arr) {
    var valid = true;

    const even_or_odd = arr.length%2==0;

    const middle = !even_or_odd ?
    Math.floor(arr.length/2) :
    false;

    const increasing = even_or_odd ?
    arr.slice(0, arr.length/2) :
    arr.slice(0, (arr.length/2)+1);

    const decreasing = even_or_odd ?
    arr.slice(arr.length/2, arr.length) :
    arr.slice((arr.length/2)+1, arr.length);



    if(valid){
        if (arr.length < 3){
            valid = false;
        }
        
        if(even_or_odd){
            if(increasing[arr.length] <= decreasing[0]){
                valid = false;
            }
        }else{
            if(arr[middle] <= arr[middle - 1]
                || arr[middle] <= arr[middle + 1]){
                valid = false;
            }   
        }

        for (let i = 0; i<increasing.length; i++){
            if(increasing[i+1]){
                if(increasing[i] >= increasing[i+1]){
                    valid = false;
                }
            }
        }

        for (let i = 0; i<decreasing.length; i++){
            if(decreasing[i+1]){
                if(decreasing[i] <= decreasing[i+1]){
                    valid = false;
                }
            }
        }

    }
    return valid;
};


main();