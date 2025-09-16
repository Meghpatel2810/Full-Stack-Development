var python=0
var javascript=0
var Java=0

const vote = (string) => {

    if(string=="Python")
    {
        python++
    }
    else if(string=="JS")
    {
        javascript++
    }
    else
    {
        Java++
    }
    document.getElementById('Ans').innerHTML=`Python = ${python} <br> JavaScript = ${javascript} <br> Java = ${Java}`
}

const random_inc = setInterval(() => {
    let num=Math.random()

    if(num>0.66)
    {
        vote('Python')
    }
    else if(num>0.33)
    {
        vote('JS')
    }
    else
    {
        vote('Java')
    }
},2000)