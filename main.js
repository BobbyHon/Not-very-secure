//Made it more complex than I needed
const lowerLetter = 'a'.charCodeAt(0) - 1
const biggerLetter = 'z'.charCodeAt(0) + 1

const checkLetter = (askii) =>{
  return askii > lowerLetter && askii < biggerLetter
}

const lowerNumber = '0'.charCodeAt(0) - 1
const biggerNumber = '9'.charCodeAt(0) + 1

const checkNumber = (askii) => {
  return askii > lowerNumber && askii < biggerNumber
}


function alphanumeric(string){
  if (string.length == 0) return false
  string = string.split('').map((x) => x.toLowerCase().charCodeAt(0))
  for (let i = string.length; i > -1; i--){
    if (checkLetter(string[i]) || checkNumber(string[i]))
      {
        string.splice([i], 1)
      }
  }
  return string.length == 0
}