
const person={
    name:'mahmudul hasan',
    age:25,
    profession: 'web developer',
    salary    :25000,
    married:true,
    'fev places':['bandorban','cox bazar','pataia']
  
  }

  person.salary=30000;
  person['age']=30;

  


  const propName='profession'

   console.log(person[propName])
   person[propName]='devops'
   
   console.log(person)

