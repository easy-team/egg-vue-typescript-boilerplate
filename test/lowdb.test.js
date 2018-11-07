const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const file = new FileSync('blog.json');
const db = lowdb(file);
db._.mixin({
  like(array, predicate){
    Object.keys(predicate).forEach(item => {

    });
  }
})
const result = db.get('article')
  .filter(item => {
    return item.title && item.title.indexOf('webpack')>-1;
  })
  .value();

console.log(result);