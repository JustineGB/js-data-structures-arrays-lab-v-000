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

function prependDriver(name) {
  
}

function removeLastDriver() {
  let first_two_drivers = drivers.slice(0,2);
  return first_two_drivers;
}

function removeFirstDriver() {
  let last_two_drivers = drivers.slice(1);
  return last_two_drivers;
}

