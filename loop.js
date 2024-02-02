const mobile={
   brand:'samsung',
   color:'black',
   cemera:'12mp',
   screen:'6inc',


}



// console.log(mobile)

// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);

// }

const keys=Object.keys(mobile);
console.log(keys);


for( const key of keys){

    console.log(key,':' ,mobile[key]);
}