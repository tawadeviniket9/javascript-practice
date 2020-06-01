 let x = { a:1,
           b:2 };

function getValue(x){
    return x.a(),x.b()
}

let access = getValue(x);
console.log(access);