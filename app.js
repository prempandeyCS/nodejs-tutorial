const {readFile, writeFile} = require ('fs').promises
// const util = require ('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try{const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
        './content/result-mind-grenade',
        `here is the result: ${first}, ${second}`
    )
    console.log(first, second);
} catch (err){
    console.log(error);
}
    
}
start()
console.log('hey i am done');
// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path ,'utf8', (err, data) =>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))