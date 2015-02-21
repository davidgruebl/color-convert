var test = require('tape')
var colorConverter = require('./')

test('hex3', function (t) {
  t.plan(4)
  var cobj = colorConverter('#123')
  t.equal(cobj.red, 17, 'red')
  t.equal(cobj.green, 34, 'green')
  t.equal(cobj.blue, 51, 'blue')
  t.equal(cobj.alpha, 1, 'alpha')
})

test('hex6', function (t) {
  t.plan(4)
  var cobj = colorConverter('#FF340D')
  t.equal(cobj.red, 255, 'red')
  t.equal(cobj.green, 52, 'green')
  t.equal(cobj.blue, 13, 'blue')
  t.equal(cobj.alpha, 1, 'alpha')
})

test('rgb', function (t) {
  t.plan(4)
  var cobj = colorConverter('rgb(12,233,77)')
  t.equal(cobj.red, 12, 'red')
  t.equal(cobj.green, 233, 'green')
  t.equal(cobj.blue, 77, 'blue')
  t.equal(cobj.alpha, 1, 'alpha')
})

test('rgba', function (t) {
  t.plan(4)
  var cobj = colorConverter('rgba(4,197,88,23)')
  t.equal(cobj.red, 4, 'red')
  t.equal(cobj.green, 197, 'green')
  t.equal(cobj.blue, 88, 'blue')
  t.equal(cobj.alpha, 23, 'alpha')
})

test('invalid', function (t) {
  t.plan(1)
  t.throws(function () {
    colorConverter('yolo')
  }, 'invalid')
})
