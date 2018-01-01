let user = {};

let mapSettings = new WeakMap();
mapSettings.set(user, "ES2");

console.log(mapSettings.get(user));
console.log(mapSettings.has(user));
console.log(mapSettings.delete(user));

for(let [key, value] of mapSettings){
  console.log(`${key} = ${value}`);
}