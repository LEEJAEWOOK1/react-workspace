function Site({arr, a_tag}){
    let li=[]
    /*for(let i = 0; i < arr.length; i++){
        console.log(`arr${i} : ${arr[i]}`)
    }
    */
   
   a_tag.forEach( v => {
        //console.lsog(v)
        li = li.concat(<li><a href={v.href}>{v.txt}</a></li>)
        //li.push(<li><a href={v.href}>{v.txt}</a></li>)
   });

   const testArr = arr.map(value => <h3>{value}</h3>);
   // [{},{},{}]
    const  testTag = a_tag.map(value => <a href={value.href}>{value.txt}</a>) //원본배열에서 속성을 따로 꺼내 새 배열을 만든다
    return (<>
        <div>{ a_tag.map(value => <a href={value.href}>{value.txt}</a>) }</div>
        <div>{testTag}</div>
        <div>{testArr}</div>
        <nav>
            <ul>{li}</ul>
        </nav>
    </>)
}
export default Site;