let stdList=[]
let std1={
  'fullname':'Nguyen Truong Giang',
  'age':22,
  'email':'123@gmail.com',
  'address':'Ha noi',
}
stdList.push(std1)
console.log(stdList[0])
for (let i =0;i<stdList.length;i++)
{
  document.writeln(`<tr>
    <td>${i+1}</td>
    <td>${stdList[i].fullname}</td>
    <td>${stdList[i].email}</td>
    <td>${stdList[i].age}</td>
    <td>${stdList[i].address}</td>
    </tr>`)
}
