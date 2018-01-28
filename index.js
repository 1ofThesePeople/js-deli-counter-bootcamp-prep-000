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
    return ""
  } else {
    var string = "There is nobody waiting to be served!"
  }
  return string
}
