let post = {
  title: 'New Features in JS',
  replies: 19
};

post[Symbol.iterator] = function () {
  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;
  
  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return { done: isDone, value: this[properties[count++]] };
  }
  
  return { next };
};

for(let p of post){
  console.log(p);
}

let values = [...post];
console.log(values);

let [ title, replies ] = post;
console.log(title);
console.log(replies);