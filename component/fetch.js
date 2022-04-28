let getData=async(url)=>{
    let res=await fetch(url);
    let data= await res.json();
    // console.log(data)
    return data;
}

let appendData=(data,container)=>{
    console.log(data);
    data.forEach(({image,price,title,description})=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=image;
    let title1=document.createElement("p");
    title1.innerText=`Title:-${title}`;
    let price1=document.createElement("p");
    price1.innerText=`Price:-${price}`;
    let description1=document.createElement("p");
    description1.innerText=`Description:-${description}`;
    let d1=document.createElement("div");
    d1.append(title1,price1,description1);
    div.append(img,d1);
    container.append(div);
    })
    }
export {getData,appendData};