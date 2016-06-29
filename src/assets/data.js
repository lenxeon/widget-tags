module.exports = {
  search (tagName, erro, succ) {
    var _matched = []
    var i = Math.round(Math.random() * 10)
    if (i < 2 || i > 7) {
      i = 0
    }
    for (var j = 0; j < i; j++) {
      _matched.push({
        'uuid': '10131' + j,
        'name': tagName + '_0' + j
      })
    }
    setTimeout(() => {
      succ(_matched)
    }, 100)
  },
  bindTagByName (subjectId, tagName) {

  },
  unBindTagById (subjectId, tagId, erro, succ) {

  }
}
