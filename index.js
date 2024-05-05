function findMatching(array, name) {
 return array.filter(item => item.toLowerCase() === name.toLowerCase())
 }

function fuzzyMatch(array, name) {
   return array.filter(item => item.toLowerCase().startsWith(name.toLowerCase()))

}
function matchName(array, name ) {
   return array.filter(array => array.name === name)
}