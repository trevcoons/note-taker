const fs = require('fs');
const utils = require('utils');
const uuid = require('uuid');

const readFileAsync = util.promisify()

//Make a class called Storage
class Store {
    read() {
        return readFileAsync
    }
}