//Q1
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
]

const res = itemsObject.map((ele) => {
    return {quantity: ele.quantity * 2, price:  ele.price * 2}
})

console.log(res);

const arr = itemsObject.filter((ele) => {
    if(ele.price > 300 && ele.quantity > 2){
        return {quantity: ele.quantity, price: ele.price};
    }
})
console.log(arr);

const sum = itemsObject.reduce((sum,ele) =>{
    return sum + ele.price * ele.quantity;
}, 0)
console.log(sum);

//Q2
const string =  " Perhaps 00The Easiest-to-understand   ad Case   For Reduce Is   To Return " +
    "The Sum Of  All The Elements In  An Array  ";

console.log((string.toLocaleLowerCase().replace(/[^a-z]/g,'')));

//Q3
const first = [
    { uuid: 2, name: "test" }, { uuid: 5, name: "test5" }, { uuid: 3, name: "test3" }
];

const second = [
    { uuid: 6, role: "pm" }, { uuid: 4, role: "engineer" }, { uuid: 1, role: "manager" }, { uuid: 2, role: "associate" }
];

const object1 = first.map((ele) =>{
    return{uuid:ele.uuid, name:ele.name, role:null};
})

const object2 = second.map((ele) =>{
    return{uuid:ele.uuid, name:null, role:ele.role};
})

const object3 = object1.concat(object2);

object3.sort((a, b) => {
    return  ( a.uuid - b.uuid  );
});

console.log(object3)