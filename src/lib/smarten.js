export default function smarten(string) {
  return string
    /* opening singles */
    .replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018")

    /* closing singles & apostrophes */
    .replace(/'/g, "\u2019")

    /* opening doubles */
    .replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c")

    /* closing doubles */
    .replace(/"/g, "\u201d")
};
