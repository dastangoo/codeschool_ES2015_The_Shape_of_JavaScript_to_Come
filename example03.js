let weakTags = new WeakSet();

// weakTags.add("JavaScript");
weakTags.add({ name: "JavaScript" });
let iOS = { name: "iOS" };
weakTags.add(iOS);

weakTags.has(iOS);
weakTags.delete(iOS);
console.log(weakTags);

for(let wt of weakTags){
  console.log(wt);
}