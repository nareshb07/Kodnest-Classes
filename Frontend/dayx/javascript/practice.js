arr = [1,4,5,2,8]
let sum = 0
    arr.forEach((ele) => {
        sum = sum + ele;
        return sum
    });

    console.log(sum);

    sum1 = arr.reduce( (sum, ele) => sum+ele, 0)
    console.log(sum1);
    
    product = arr.reduce((pro, ele) => pro*ele, 1)
    console.log(product);
    