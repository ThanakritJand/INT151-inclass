// isArray
console.log(Array.isArray([]));
console.log(Array.isArray([1,true]));

// concat
const a1 = [1,2,3,4]
const a2 = [5,6,7,8]
const a3 = a1.concat(a2)
console.log(a3);

// tostring()
console.log(a3.toString());

// sort
// numeric
const month = ['March' , 'jan' , 'feb' ,'Dec']
parseInt(month.sort())
console.log(month);

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
// sort from char ==> .localCompare
stds.sort((a , b) => a.name.localeCompare(b.name))
console.log(stds);