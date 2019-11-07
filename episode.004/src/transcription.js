export default function transcription(text) {
    var DNA = ""
    for (let i = 0; i<text.length; i++){
      if ( text[i] === 'A' ) {
        DNA += 'U'
      }
      else if ( text[i] === 'C' ) {
        DNA += 'G'
      }
      else if ( text[i] === 'G' ) {
        DNA += 'C'
      }
      else if ( text[i] === 'T' ) {
        DNA += 'A'
      }
      else {
        throw new Error (`Nucleotide ${text[i]} does not exist`)
      }
    }
    return DNA;
}