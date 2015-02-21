function pCstring (str) {
  var type
  var retVal

  if (str[0] === '#') {
    if(str.length === 4) {
      type = 'hex3'
    }
    if (str.length === 7) {
      type = 'hex6'
    }
    retVal = pTColorTypeString(type, str)
  }
  if (str[0] === 'r') {
    if(str[3] != 'a') {
      type = 'rgb'
    }
    if (str[3] === 'a') {
      type = "rgba"
    }
    retVal = pTColorTypeString(type, str)
  }
  if (type === undefined) {
    throw new Error('Invalid color string')
  }
  return retVal
}

function pTColorTypeString(type, str) {
  var retObj = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  }

  if (type === 'hex3') {
    var red = parseInt(str[1] + str[1], 16)
    var green = parseInt(str[2] + str[2], 16)
    var blue = parseInt(str[3] + str[3], 16)
    var alpha = 1
    retObj.red = red
    retObj.green = green
    retObj.blue = blue
    retObj.alpha = alpha
  }
  if (type === 'hex6') {
    var red = parseInt(str[1] + str[2], 16)
    var green = parseInt(str[3] + str[4], 16)
    var blue = parseInt(str[5] + str[6], 16)
    var alpha = 1
    retObj.red = red
    retObj.green = green
    retObj.blue = blue
    retObj.alpha = alpha
  }
  if (type === 'rgb') {
    var sstr = str.replace('(', '').replace(')', '').substr(3).split(',')
    var red = parseInt(sstr[0], 10)
    var green = parseInt(sstr[1], 10)
    var blue = parseInt(sstr[2], 10)
    var alpha = 1
    retObj.red = red
    retObj.green = green
    retObj.blue = blue
    retObj.alpha = alpha
  }
  if (type === 'rgba') {
    var sstr = str.replace('(', '').replace(')', '').substr(4).split(',')
    var red = parseInt(sstr[0], 10)
    var green = parseInt(sstr[1], 10)
    var blue = parseInt(sstr[2], 10)
    var alpha = parseInt(sstr[3], 10)
    retObj.red = red
    retObj.green = green
    retObj.blue = blue
    retObj.alpha = alpha
  }
  return retObj
}

module.exports = pCstring
