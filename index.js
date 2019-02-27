function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  spy = 
}

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })

function logShout(string) {
  console.log(logShout)
}

function sayHiToGrandma(string) {
  if (string.toLowerCase=== lowercase) {
    return "I can't hear you!"
  } else if (string.toUpperCase===uppercase) {
    return "YES INDEED!"
  } else if (string== "I love you, Grandma") {
    return "I love you, too."
  }
    