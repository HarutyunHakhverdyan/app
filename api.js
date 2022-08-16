fetch("https://api.thecatapi.com/v1/breeds")
.then(response=>response.json())
.then(data=>a(data))
function a(n){
 let k=n.slice(1,9)
 k.forEach((el)=>{
 	let div1=document.createElement('div')

 	let div=document.createElement('div')
 	div.style.display='flex'
 	div.style.flexDirection='column'
 	let img=document.createElement('img')
 	div.append(el.name);
 	img.src=el.image.url
 	div1.append(div,img)
 	container.append(div1)
    div1.onclick=()=>{
    	let a=document.createElement('a')
    	a.append('wikipedia')
    	a.href=el.wikipedia_url
    	div.append(a)
    } 
 })
 console.log(k)
}
