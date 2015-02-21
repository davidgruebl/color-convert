function pCstring (str) {
  // hex #000 #000000
  // rgb rgb(000,000,000)
  // rgba rgb(000,000,000,000)
  var type = undefined
  var retVal = undefined

  if (str[0] == '#') {
    if(str.length === 4) {
      type = 'hex3'
    }
    else if (str.length === 7) {
      type = 'hex6'
    }
    retVal = pTColorTypeString('hex', type, str)
  }
  else if (str[0] == 'r') {
    if(str[3] != 'a') {
      type = 'rgb'
    }
    else if (str[3] == 'a') {
      type = "rgba"
    }
    retVal = pTColorTypeString('rgb', type, str)
  }
  else if (type === undefined) {
    type = '?'
    retVal = pTColorTypeString('?', type, str)
  }
  if(retVal == undefined){
    return invokeRetValNotFoundErr(retVal)
  }
  return retVal
}

function invokeRetValNotFoundErr(retVal) {
  if(retVal == undefined){
      throw new Error('ERVNF')
  }
}

function pTColorTypeString(type1, type2, str) {
  var set = false
  var retObj = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  }
  if (type1 == '?') {
    throw new Error('type is not defined')
  }
  else if (type1 == 'hex') {
    if (type2 == 'hex3') {
      var red = parseInt(str[1] + str[1], 16)
      var green = parseInt(str[2] + str[2], 16)
      var blue = parseInt(str[3] + str[3], 16)
      var alpha = 1
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
    if (set == false && type2 == 'hex6') {
      var red = parseInt(str[1] + str[2], 16)
      var green = parseInt(str[3] + str[4], 16)
      var blue = parseInt(str[5] + str[6], 16)
      var alpha = 1
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
  }
  else if (type1 == 'rgb') {
    if (type2 == 'rgb' && type2 != 'hex3') {
      var sstr = str.replace('(', '').replace(')', '').substr(3).split(',')
      var red = parseInt(sstr[0], 10)
      var green = parseInt(sstr[1], 10)
      var blue = parseInt(sstr[2], 10)
      var alpha = 1
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
    if (type2 == 'rgba' && type2 != 'hex6') {
      var sstr = str.replace('(', '').replace(')', '').substr(4).split(',')
      var red = parseInt(sstr[0], 10)
      var green = parseInt(sstr[1], 10)
      var blue = parseInt(sstr[2], 10)
      var alpha = parseInt(sstr[3], 10)
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
  }
  if (set == false) {
    throw new Error('set is false')
  }
  return retObj
}

module.exports = pCstring
