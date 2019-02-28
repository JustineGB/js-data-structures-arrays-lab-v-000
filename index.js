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
  let new_array = drivers.slice(-1);
  return new_array;
}

function removeFirstDriver() {
  let new_array = drivers.slice(1);
  return new_array;
}

