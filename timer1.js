const alramInputs = process.argv.slice(2);
for (let element of alramInputs) {
  if (element < 0) continue
  if (!isNaN(element)) {
    setTimeout(() => {
      process.stdout.write(`the ${element} second timer is finished \n`);
    }, element*1000);
  }
  
}



// alramInputs.map(element => {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//     console.log('new timer is', element)
//   }, element*1000);
// });