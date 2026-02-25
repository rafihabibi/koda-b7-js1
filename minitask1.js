
const who = {
    am: {
        i:"Rafi Habibi"
    }
}
console.log(who.am.i);

const hello = {
    world: "Hello World"
}
console.log(hello.world);

const obj = {
    str:{
        1: {
            2: {
                3:{
                    koda: [{
                        tech:{
                            "academy":"Koda Tech Academy"
                        }
                    }]
                }
            }
        }
    }
}
console.log(obj.str[1][2][3].koda[0].tech["academy"]);

const my = [{
    very: {
        "best":{
            1: {
                sport: {
                    is: "Football"
                }
            }
        }
    }
}]
console.log(my[0].very.best[1].sport.is);