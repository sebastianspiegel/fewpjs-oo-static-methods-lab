class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, ''); 
  }

  static titleize(string){
    let ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(' ')
    let newArray = []
    for ( let i = 0; i < array.length; i++ ){
      if (i == 0) {
        newArray.push(this.capitalize( array[i] ))
      } else {
        if (ignore.includes( array[i] )) {
          newArray.push( array[i] )
        } else {
          newArray.push( this.capitalize(array[i]) )
        }
      }
    }
    return newArray.join(" ")
  }
}

//capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.