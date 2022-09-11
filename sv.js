let stdList=[]
let std1={
  'name':'Nguyen van A',
  'age' :22,
  'address':'Hanoi',
  'email':'123@gmail.com'
}
stdList.push(std1)
for (let i=0;i<stdList.length;i++)
{
  document.writeln(
    `<tr>
      <td>${i+1}</td>
      <td>${stdList[i].name}</td>
      <td>${stdList[i].age}</td>
      <td>${stdList[i].address}</td>
      <td>${stdList[i].email}</td>
    </tr>`
  )
}
