let mapSettings = new Map();

mapSettings.set("user", "Sam");
mapSettings.set("topic", "ES2015");
mapSettings.set("replies", ["Can't wait!", "So Cool"]);

for(let [key, value] of mapSettings){
  console.log(`${key} = ${value}`);
}