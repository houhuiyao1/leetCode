// var isValid = function(s){
//     if(!s || s.length % 2 == 1){
//         return false
//     }

//     let m = {
//         '(':')',
//         '{':'}',
//         '[':']',
//         }

//     let stack = []
//     for(let char of s){
//         if(char === '{' || char === '(' || char === '['){
//             stack.push(char)
//         }else{
//             let pop = stack.pop()
//             if(char !== m[pop])return false
//         }
//     }
//     return stack.length > 0?false:true
// }

var isValid = function(s){
    if(!s || s.length % 2 == 1){
        return false
    }

    let map = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']'],
    ])

    let stack = []
    for(let char of s){
        if(char === '[' || char === '(' || char === '{'){
            stack.push(char)
        }else{
            let pop = stack.pop()
            if(map.get(pop) !== char)return false
        }
    }
    return stack.length > 0?false:true
}

console.log(isValid("()[]("));
