function takeANumber(katzDeliLine, customer) {
  var number = katzDeliLine.length + 1
  console.log(number);
  var string = `Welcome, ${customer}. You are number ${number} in line.`
  return string
}
