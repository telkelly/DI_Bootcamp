// part 1

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {
  let founded = carInventory.find((i) => {
    return i.car_make === "Honda";
  });
  return console.log(
    `This is a ${founded.car_make} ${founded.car_model} from ${founded.car_year}`
  );
}

getCarHonda(inventory);

// part 2

function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((a, b) => a.car_year - b.car_year);
}

const sortedInventory = sortCarInventoryByYear(inventory);

console.log(sortedInventory);
