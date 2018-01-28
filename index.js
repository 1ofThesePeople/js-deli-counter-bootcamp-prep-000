function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  var number = katzDeliLine.length
  var string = `Welcome, ${customer}. You are number ${number.toString()} in line.`
  return string
}
