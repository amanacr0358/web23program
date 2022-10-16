//Given a string count the number of words in that string

let arr="I Am Great";
let count =0;

for (i=0;i<=arr.length-1;i++){
  if (arr[i]==" "){
    count++
  }
}
  if (arr.length!=0){
    console.log("Number of words are" ,count+1);
  }else {
    console.log("Number of words are " , 0);
  }