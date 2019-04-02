const getId = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 1500);
});


const getRecepie = (recid) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const data = {
                title: "cheese"
            }
            resolve(`${id}: ${data.title}`);
        }, 1500, recid)
    })
}

const getRelated = (pubId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${pubId}`)
        }, 1500, pubId)
    })
}


async function getRecepieAw() {
const Ids = await getId;
console.log(Ids);

const receipe = await getRecepie(Ids);
console.log(receipe);

const related = await getRelated("saikumar is master chef");
console.log(related);
}

getRecepieAw();