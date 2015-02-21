module.exports = function (str) {
  if (str[0] === '#' && str.length === 4) {
    return {
      red: parseInt(str[1] + str[1], 16),
      green: parseInt(str[2] + str[2], 16),
      blue: parseInt(str[3] + str[3], 16),
      alpha: 1
    }
  }
  if (str[0] === '#' && str.length === 7) {
    return {
      red: parseInt(str[1] + str[2], 16),
      green: parseInt(str[3] + str[4], 16),
      blue: parseInt(str[5] + str[6], 16),
      alpha: 1
    }
  }
  if (str[0] === 'r' && str[3] !== 'a') {
    var sstr = str.replace('(', '').replace(')', '').substr(3).split(',')
    return {
      red: parseInt(sstr[0], 10),
      green: parseInt(sstr[1], 10),
      blue: parseInt(sstr[2], 10),
      alpha: 1
    }
  }
  if (str[0] === 'r' && str[3] === 'a') {
    var sstr = str.replace('(', '').replace(')', '').substr(4).split(',')
    return {
      red: parseInt(sstr[0], 10),
      green: parseInt(sstr[1], 10),
      blue: parseInt(sstr[2], 10),
      alpha: parseInt(sstr[3], 10)
    }
  }
  throw new Error('Invalid color string')
}
