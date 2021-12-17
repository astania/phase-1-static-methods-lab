class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\w ]+/g, "")
  }

  static titleize(string){
    let arr = []
    let excludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    arr = string.split(' ')
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    return arr.map(word => {
      return excludeWords.includes(word) ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  }
}