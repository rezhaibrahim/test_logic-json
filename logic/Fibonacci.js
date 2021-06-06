var total=0
let data = [15,1,3]
let add = 0
for(i=0;i<data.length;i++){
     total=total+data[i]
}
if (total <= 19) {
    add = 2
}
console.log(add);
console.log(total,'+',add,'=',total + add );