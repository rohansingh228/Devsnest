// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function most_freq(arr){
    
    let max_count = -1;
    let max_item;
    for(let item of arr){
        let count = 0;
        for(let innerItem of arr){
            if(item === innerItem){
                count +=1;
            }
        }
        if (count > max_count){
            max_count = count;
            max_item = item;
        }

    }
    // console.log(max_count);


    console.log(max_item + " " + '(' + " " + max_count + " " + "times" + " " + ')')
}


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
most_freq(arr1);



// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )