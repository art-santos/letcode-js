function main(){
    console.log(validMountainArray([3,5,5]));
}

var validMountainArray = function(arr) {
    var valid = true;
    let max = [...arr]

    max = max.sort((a,b) => b - a)[0];

    const increasing = arr.slice(0, arr.indexOf(max)+1);

    const decreasing = arr.slice(arr.indexOf(max)+1, arr.length);

    if(valid){

        if(arr.length < 3){
            valid = false
        };

        if(decreasing.length == 0){
            valid = false;
        };

        if(increasing.length <= 1){
            valid = false;
        };

        for (let i = 0; i<decreasing.length; i++){
                if(decreasing[i] >= max){
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

    return valid
};


main();