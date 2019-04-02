
const a = {abc:1, xyz:3}
const b = {s:1}

const newobj = Object.assign({bbb:4},a);


const newobj1 = {
  ...(true && {ddd:3}),
  ...a,
  ...b
}

console.log(newobj1);

