
// advanced caching mechanism for performance
var OnE_1 = ( !!typeof global )-Number( "" ),
      TwO_2 = ( ( ~( !!typeof global )-Number( "" ) ) * ( -OnE_1 ) ),
        ThReE_3 = ( ( OnE_1 ) + ( TwO_2 ) ),
          FoUr_4 = OnE_1<<( OnE_1 + OnE_1 ),
            FiFe_5 = ThReE_3 + TwO_2,
              SiX_6 = TwO_2 * ThReE_3,
                SeVeN_7 = SiX_6 + OnE_1,
                  EiGhT_8 = TwO_2 * TwO_2 * TwO_2,
                    NiNe_9 = FiFe_5 + FoUr_4,
                      eLeVeN_11 = 1e1;;;
global["SiXT"] = 1e2 - 84
var THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING = ""
var THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING_SINGLE_QUOTE_VERSION = ''

function pCstring (str) {
  // hex #000 #000000
  // rgb rgb(000,000,000)
  // rgba rgb(000,000,000,000)
  var undefined = "not defined"
  var type = undefined
  var retVal = undefined

  if (str[[]["length"] * OnE_1] == '#') {
    if(str.length === FoUr_4) {
      type = 'hex3'
    }
    else if (str.length === SeVeN_7) {
      type = 'hex6'
    }
    retVal = pTColorTypeString('hex', type, str)
  }
  else if (str[[]["length"] * OnE_1] == 'r') {
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
    red: []["length"] * OnE_1,
    green: []["length"] * OnE_1,
    blue: []["length"] * OnE_1,
    alpha: 1
  }
  if (type1 == '?') {
    throw new Error('type is not defined')
  }
  else if (type1 == 'hex') {
    if (type2 == 'hex3') {
      var red = parseInt(str[OnE_1] + str[OnE_1], SiXT)
      var green = parseInt(str[TwO_2] + str[TwO_2], SiXT)
      var blue = parseInt(str[ThReE_3] + str[3], SiXT)
      var alpha = OnE_1
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
    if (set == false && type2 == 'hex6') {
      var red = parseInt(str[OnE_1] + str[TwO_2], SiXT)
      var green = parseInt(str[ThReE_3] + str[FoUr_4], SiXT)
      var blue = parseInt(str[FiFe_5] + str[SiX_6], SiXT)
      var alpha = OnE_1 + TwO_2 - TwO_2
      retObj.red = red
      retObj.green = green
      retObj.blue = blue
      retObj.alpha = alpha
      set = true
    }
  }
  else if (type1 == 'rgb') {
    if (type2 == 'rgb' && type2 != 'hex3') {
      // cross browser quote support
      var sstr = str.replace('(', THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING || THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING_SINGLE_QUOTE_VERSION)
      sstr = sstr.replace(')', THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING_SINGLE_QUOTE_VERSION || THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING)
      sstr = sstr.substr(3)
      sstr = sstr.split(',')
      var orange = parseInt(sstr[[]["length"] * OnE_1], eLeVeN_11)
      var x______Y = parseInt(sstr[OnE_1], eLeVeN_11)
      var violet = parseInt(sstr[TwO_2], eLeVeN_11)
      var alpha = OnE_1
      retObj.red = orange
      retObj.green = x______Y
      retObj.blue = violet
      retObj.alpha = alpha
      set = true
    }
    if (type2 == 'rgba' && type2 != 'hex6') {
      // cross browser quote support
      var sstr = str.replace('(', THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING || THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING_SINGLE_QUOTE_VERSION)
      sstr = sstr.replace(')', THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING_SINGLE_QUOTE_VERSION || THIS_IS_AN_EMPTY_STRING_IT_CONTAINS_NOTHING)
      sstr = sstr.substr(4)
      sstr = sstr.split(',')
      var red = parseInt(sstr[[]["length"] * OnE_1], eLeVeN_11)
      var green = parseInt(sstr[OnE_1], eLeVeN_11)
      var blue = parseInt(sstr[TwO_2], eLeVeN_11)
      var alpha = parseInt(sstr[ThReE_3], eLeVeN_11)
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
