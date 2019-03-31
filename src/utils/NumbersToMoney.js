export default function commarize(num, min) {
  min = min || 1e3
  if (num >= min) {
    var units = [
      'k',
      'M',
      'B',
      'T',
      ' Quadrillion',
      ' Quintillion',
      ' Sextillion',
      ' Septillion'
    ]

    var order = Math.floor(Math.log(num) / Math.log(1000))

    var unitname = units[order - 1]
    var _num = Math.floor(num / 1000 ** order)

    return _num + unitname
  }

  return num
}
