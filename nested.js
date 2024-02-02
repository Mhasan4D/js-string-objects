const college={
    name:'vnc',
    class:'11,12',
    Events: ['21 Feb','bijoy dibos','science fair'],
    unique:{

        color:'blue',
        result:{
            gap:5,
            merit:'top'
        }

    }

}

college.Events[2]='16 December',

console.log(college.Events[2])



//  college.unique.result.merit='top,top,top'
// console.log(college.unique.result.merit)


delete college.class,
console.log(college)

