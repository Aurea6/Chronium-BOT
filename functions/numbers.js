function numbers(number) {
  if(number == undefined || number == null) throw new RangeError(number + "must not be null or undefined")
  if(typeof number == "number") {
    number = number;
  } else {
    if(typeof number == "string") {
      if(isNaN(number)) {
        throw new RangeError(number + " is not a number")
      } else {
        number = Number(number)
      }
    }
  }
  return number.toLocaleString()
}

module.exports = numbers