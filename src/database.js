let database = [];

function create(key, value){
  database.push({
    key,
    value,
  });

  return database;
}

function find(key){
  return database.find(element => element.key === key);
}

function findAll(){
  return database;
}

function remove(key){
  database = database.filter(element => element.key !== key);

  return database;
}

module.exports = {
  create,
  find,
  findAll,
  remove,
}