function squareName(a) {
    return a **2;
}
console.log("The result is " + squareName(3))

function halfNumber(b) {
    return b/2;
}
console.log("Half of " + halfNumber(5))

function percentof(c, d) {
    let answer = ((c/d) * 100);
    return answer;
}
console.log("1000 is " + percentof(1000, 10000)+"%" + " of 10000")

function areaOfCircle(num) {
    let  r = 2;
    let answer = Math.PI.toFixed(2) * r;
    return answer;
}
console.log(areaOfCircle(2))

function lastQ(last){
    let half = half/2;
    let square = squareName(half);
    let area = areaOfCircle(square);
    let percentage = percentof(area, square);
}
console.log(lastQ(2))