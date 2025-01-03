function myFunc() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    // Removed the break statement; the loop now runs to completion
  }
}

//Alternative solution using a for loop
function myFunc2(){
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}