
var Chapter_possibleTypes = ['Chapter']
export var isChapter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isChapter"')
  return Chapter_possibleTypes.includes(obj.__typename)
}



var Idea_possibleTypes = ['Idea']
export var isIdea = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIdea"')
  return Idea_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}
