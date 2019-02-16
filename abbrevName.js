function abbrevName(name) {

    return name.split(' ').map((item) => item[0].toUpperCase()).join('.')

}

console.log(abbrevName("Sam smith"))