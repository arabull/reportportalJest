const myObjR = {
   ...{  
       type: 'same',
       array: ['one', 'two'],
       secondArray: ['three', 'four']
    },
    ...{  
        type: 'same',
        secondArray: ['3', '4']
     },
}


console.log(myObjR)