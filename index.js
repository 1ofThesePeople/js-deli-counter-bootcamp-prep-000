function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  var number = katzDeliLine.length
  var string = `Welcome, ${customer}. You are number ${number.toString()} in line.`
  return string
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var string = katzDeliLine.shift()
    var call = `Currently serving ${string}.`
  } else {
    var call = "There is nobody waiting to be served!"
  }
  return call
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    var call = "There is nobody waiting to be served!"
  } else {
    var string = "The line is currently: "
  }
  return call
}
