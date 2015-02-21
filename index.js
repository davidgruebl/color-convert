module.exports = function (str) {

  if (str[0] === '#') {
    str = str.replace('#','')
    if (str.length === 3) str = str.split('').map(function (char) {
      return char + char
    }).join('')

    return {
      red: parseInt(str[0] + str[1], 16),
      green: parseInt(str[2] + str[3], 16),
      blue: parseInt(str[4] + str[5], 16),
      alpha: 1
    }
  }

  if (!(str[0] === 'r')) throw new Error('Invalid color string')

  var channels = str.replace(/[rgba()]/g, '').split(',')
  channels.push('1')

  return {
    red: parseInt(channels[0], 10),
    green: parseInt(channels[1], 10),
    blue: parseInt(channels[2], 10),
    alpha: parseInt(channels[3], 10)
  }
}
