// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // Code your solution here

// const totalBatteries = batteryBatches.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );

// console.log(totalBatteries);

fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(`Holy cow! There are ${data["number"]} humans in space.`);
  });
