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




function removeLastDriver(0, drivers.lenght -1) {
  drivers.slice(0, drivers.lenght -1);
}

function removeFirstDriver() {
  drivers.slice(1);
}

