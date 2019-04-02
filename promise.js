
//creating the promise
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

const getIdError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject([1, 2, 3, 4]);
    }, 1500);
});

// calling the success
getId
    .then((id) => {
        console.log(id);
        return getRecepie(id[1]);
    })

    .then((data) => {
        console.log(data);
        return getRelated('Saikumar is good cook');
    })

    .then((data) => {
        console.log(data);
    })


// calling the failure
getIdError.catch((id) => {
    console.log("Error is handled", id);
})

