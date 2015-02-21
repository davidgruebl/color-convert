module.exports = function (str) {
  var type

  if (str[0] === '#') {
    type = 'hex3'
    if (str.length === 7) {
      type = 'hex6'
    }
  }
  if (str[0] === 'r') {
    type = 'rgb'
    if (str[3] === 'a') {
      type = "rgba"
    }
  }
  if (type === undefined) {
    throw new Error('Invalid color string')
  }

  var retObj = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  }

  if (type === 'hex3') {
    retObj.red = parseInt(str[1] + str[1], 16)
    retObj.green = parseInt(str[2] + str[2], 16)
    retObj.blue = parseInt(str[3] + str[3], 16)
  }

  if (type === 'hex6') {
    retObj.red = parseInt(str[1] + str[2], 16)
    retObj.green = parseInt(str[3] + str[4], 16)
    retObj.blue = parseInt(str[5] + str[6], 16)
  }

  if (type === 'rgb') {
    var sstr = str.replace('(', '').replace(')', '').substr(3).split(',')
    retObj.red = parseInt(sstr[0], 10)
    retObj.green = parseInt(sstr[1], 10)
    retObj.blue = parseInt(sstr[2], 10)
  }

  if (type === 'rgba') {
    var sstr = str.replace('(', '').replace(')', '').substr(4).split(',')
    retObj.red = parseInt(sstr[0], 10)
    retObj.green = parseInt(sstr[1], 10)
    retObj.blue = parseInt(sstr[2], 10)
    retObj.alpha = parseInt(sstr[3], 10)
  }
  return retObj
}
