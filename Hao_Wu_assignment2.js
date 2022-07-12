//Q1
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
]

function double(item){
    return item.map((ele) => {
        return {quantity: ele.quantity * 2, price:  ele.price * 2}
    })
}

console.log(double(itemsObject));

function f(item){
    return item.filter((ele) => {
    if(ele.price > 300 && ele.quantity > 2){
        return {quantity: ele.quantity, price: ele.price};
    }
    })
}
console.log(f(itemsObject));

function sumElement(item) {
    return item.reduce((sum, ele) => {
        return sum + ele.price * ele.quantity;
    }, 0)
}
console.log(sumElement(itemsObject));

//Q2
const string =  " Perhaps 00The Easiest-to-understand   ad Case   For Reduce Is   To Return " +
    "The Sum Of  All The Elements In  An Array  ";
function toLow(ele){
    return ele.toLocaleLowerCase().replace(/[^a-z]/g, '');
}
console.log(toLow(string));

//Q3
const first = [
    { uuid: 2, name: "test" }, { uuid: 5, name: "test5" }, { uuid: 3, name: "test3" }
];
const second = [
    { uuid: 6, role: "pm" }, { uuid: 4, role: "engineer" }, { uuid: 1, role: "manager" }, { uuid: 2, role: "associate" }
];

function merge(obj1,obj2) {
    const object1 = obj1.map((ele) => {
        return {uuid: ele.uuid, name: ele.name, role: null};
    })

    const object2 = obj2.map((ele) => {
        return {uuid: ele.uuid, name: null, role: ele.role};
    })

    return object1.concat(object2).sort((a, b) => {
        return (a.uuid - b.uuid);
    });
}
console.log(merge(first,second));