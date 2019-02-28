// Write your solution here!

const drivers = (["Milo", "Otis", "Garfield"])

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}



function removeLastDriver() {
  let last_driver = drivers.slice(-1);
  return last_driver;
}

function removeFirstDriver() {
  let last_two_drivers = drivers.slice(1);
  return last_two_drivers;
}

