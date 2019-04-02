
const unorderedList = [
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
    { id: 4, label: 'Four' },
];

const itemOrder = [2,5,6,4,3];

const orderedList =  [
    { id: 3, label: 'Three' },
    { id: 2, label: 'Two' }
];

function mapOrder(unorderedList,orderedList,key) {
    const result = orderedList.map((item) => {
        return unorderedList.find((obj) => {
            console.log("sai",obj);
            return obj[key] === item
        })
    }).filter(item => item);

    console.log(result);
}

mapOrder(unorderedList, itemOrder, 'id');
