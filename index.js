const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(o => o.result === "W")
  return !!win ? win.year : undefined

}
