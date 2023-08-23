let input = document.getElementById('search')
let nn =document.getElementById("rusultv")
let show = document.getElementById("show")
let rusult = document.getElementById('rusult')
let searchbox = document.getElementById('searchbox')

 let ky = ""
 let page =1;

 async function getemage(){

    ky = input.value 
    let url =`https://api.unsplash.com/search/photos?page=${page}&query=${ky}&client_id=GnGmzbkjJ2R8tXK37m3r3MJgDuBp99yLoT9k93voKLw&per_page=9`
 let response =  await   fetch(url)
let data = await response.json()
console.log(data)

// img data 
if(page === 1){
   nn.innerHTML=""
}
resultsb = data.results
resultsb.map((resultbox) =>{
   var img = document.createElement("img")
   img.src = resultbox.urls.small


nn.appendChild(img)
})
show.style.display="block"
}
searchbox.addEventListener("submit",(e)=>{
e.preventDefault()
page=1;
getemage()
})

show.onclick =function(){
   page++
   getemage()
   
}