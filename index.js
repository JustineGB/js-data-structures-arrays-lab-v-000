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
  drivers.slice(-1);
  return drivers;
}

function removeFirstDriver() {
  new_array = drivers.slice(1);
  return new_array;
}

