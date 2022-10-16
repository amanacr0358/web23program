for (let i=1;i<=100;i++){
  let count_f=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){
      count_f++;
    }
  }if (count_f==2){
    console.log(i,"is prime");
    
  }else {
    console.log(i,"is not prime");
  }
}