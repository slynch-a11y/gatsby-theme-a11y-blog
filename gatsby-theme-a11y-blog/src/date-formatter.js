const monthObj = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};
export default function formatDate(date) {
  const monthValue = date.split('').slice(5, 7).join('');
  const day = date.split('').slice(8, 10).join('');
  const year = date.split('').slice(0, 4).join('');
  function getKeyByValue(object, value) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }
  const month = getKeyByValue(monthObj, monthValue);
  return `${month} ${day}, ${year}`;
}
