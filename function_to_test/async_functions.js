const abc = {};

//async await
abc.add = async (num1, num2) => {
    try {
        if(num1 && num2) {
            const result = await num1 + num2;
            return result;
        } else {
            throw 'missing arg';
        }
    } catch (err) {
        throw err;
    }
};


//promise
abc.multiply = (num1, num2) => {
    return new Promise((resolve,reject)=>{
        resolve(num1 * num2)
    })    
};

module.exports = abc;