//3
function array_change(arr) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[count++]=arr[i];
        }
    }
    for(let i = count; i < arr.length; i++){
        arr[i]=0;
    }
    return arr;
}
//2
function anagrams(word, words) {
    return words.filter(function(item){
        return item.split('').sort().join('') === word.split('').sort().join('');
    });
}