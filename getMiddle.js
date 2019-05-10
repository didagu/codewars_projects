function getMiddle(s)
{
  //Code goes here!
  let len = s.length
  let half = s.length / 2
  if(len === 1){
      return s
  }else if(len % 2 === 0) {
      return `${s[half - 1]}${s[half]}`
  }else{
      return `${s[Math.floor(half)]}`
  }
}

function getMiddle(s) {
    let half = s.length / 2
    return (s.length % 2) ? s.charAt(half) : s.slice(half - 1,half + 1)
}


console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t"); 
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");