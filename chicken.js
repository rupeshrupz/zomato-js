let display =  document.querySelector('#displayData')
let sort = document.querySelector('.sort-filter')
let sortedData = document.querySelector("#sortedData1")
let sortedData2 = document.querySelector("#sortedData2")
let rating = document.querySelector(".Rating")
let ratedData = document.querySelector('#ratedData')
let radio1 = document.querySelector('#ratingHighLow')
let radio2 = document.querySelector('#dileveryTime')
let radio3 = document.querySelector('#costLowHigh')
let radio4 = document.querySelector('#costHighLow')
let apply = document.querySelector('#applyButton')
let dileveryData = document.querySelector('#dilveryData')
let clearAll =  document.querySelector("#clearAll")
let closeBtn = document.querySelector('#closeButtonMain')
let filterSection = document.querySelector('#filterSection')
let mainFilter = document.querySelector('#mainFilter')
let ratedMore = document.querySelector('#ratedMore')

rating.onclick = function()
{
    if(display.style.display != "none" || sortedData.style.display != "none" ||  sortedData2.style.display != "none" || dileveryData.style.display != "none")
    {
        display.style.display = "none" 
        ratedData.style.display = "none" 
        sortedData.style.display = "none" 
        sortedData2.style.display = "none"
        dileveryData.style.display = "none"    
        ratedMore.style.display = "grid"
    }
    else if(display.style.display == "none"){
        display.style.display = "grid" 
        ratedMore.style.display = "none"
        ratedData.style.display = "none" 
        sortedData.style.display = "none" 
        sortedData2.style.display = "none"
        dileveryData.style.display = "none"    

    }

    let divChildren = document.querySelectorAll(".price")
    let stored =[]
    divChildren.forEach(ele=>
        {

           stored.push(ele)
})


let stored1 = stored.map(ele =>
    {
        return ele
    })

    let stored2 = stored1.filter(ele =>
    {
        return ele.getAttribute("rating") > 4
    })
    console.log(stored2)   
    
    let stored3 =""
    stored2.forEach(ele =>
    {
        stored3 += ele.innerHTML
    })
    ratedMore.innerHTML = stored3
}

apply.onclick = function()
{
    if(radio1.checked == false ||radio2.checked == false || radio3.checked == false || radio4.checked == false )
{
    console.log("click first")
}
    let divChildren = document.querySelectorAll(".price")
    let stored =[]
    divChildren.forEach(ele=>
        {

           stored.push(ele)
})


let stored1 = stored.map(ele =>
    {
        return ele
    })
    console.log(radio1.getAttribute('value'))


    if(radio1.checked == true)
    {
        filterSection.style.display = "none"
    document.body.style.overflow = "visible"
        
        if(display.style.display != "none" || sortedData.style.display != "none" ||  sortedData2.style.display != "none" || dileveryData.style.display != "none" ||  ratedMore.style.display != "none" )
        {
            display.style.display = "none" 
            ratedData.style.display = "grid" 
            sortedData.style.display = "none" 
            sortedData2.style.display = "none"
            dileveryData.style.display = "none"
            ratedMore.style.display = "none"
            document.body.style.overflowX = "hidden"
        
        }
  
   
 let stored2 = stored1.sort((a,b) =>
        {
            return b.getAttribute("rating") - a.getAttribute("rating")
        })
        console.log(stored2)   
        
        let stored3 =""
        stored2.forEach(ele =>
        {
            stored3 += ele.innerHTML
        })
        ratedData.innerHTML = stored3
}


if(radio2.checked == true)
{
    filterSection.style.display = "none"
    document.body.style.overflow = "visible"
    if(display.style.display != "none" || ratedData.style.display != "none" || sortedData.style.display != "none" || sortedData2.style.display != "none" || ratedMore.style.display != "none")
    {
        display.style.display = "none" 
            ratedData.style.display = "none" 
            sortedData.style.display = "none" 
            sortedData2.style.display = "none"
            dileveryData.style.display = "grid"
            ratedMore.style.display = "none"
            document.body.style.overflowX = "hidden"
    
    }
    

    let stored2 = stored1.sort((a,b)=>
    {
    
       return a.getAttribute("dilevery") - b.getAttribute("dilevery")
    })
    let stored3 =""
    stored2.forEach(ele =>
    {
        stored3 += ele.innerHTML
    })
    dileveryData.innerHTML = stored3

}


if(radio3.checked == true)
{
    filterSection.style.display = "none"
    document.body.style.overflow = "visible"
    if(display.style.display != "none" ||  ratedData.style.display != "none" || sortedData2.style.display != "none" || dileveryData.style.display != "none" ||ratedMore.style.display != "none")
{
            display.style.display = "none" 
            ratedData.style.display = "none" 
            sortedData.style.display = "grid" 
            sortedData2.style.display = "none"
            dileveryData.style.display = "none"
            ratedMore.style.display = "none"
            document.body.style.overflowX = "hidden"

}

let stored2 = stored1.sort((a,b)=>
{

   return a.getAttribute("price") - b.getAttribute("price")
})
let stored3 =""
stored2.forEach(ele =>
{
    stored3 += ele.innerHTML
})
sortedData.innerHTML = stored3
}

if(radio4.checked == true)
{
    filterSection.style.display = "none"
    document.body.style.overflow = "visible"
    if(display.style.display != "none" ||  ratedData.style.display != "none" || sortedData.style.display != "none" || dileveryData.style.display != "none" || ratedMore.style.display != "none")
    {
            display.style.display = "none" 
            ratedData.style.display = "none" 
            sortedData.style.display = "none" 
            sortedData2.style.display = "grid"
            dileveryData.style.display = "none"
            ratedMore.style.display = "none"
            document.body.style.overflowX = "hidden"

    
    }


    

    let stored2 = stored1.sort((a,b)=>
{

   return b.getAttribute("price") - a.getAttribute("price")
})
let stored3 =""
stored2.forEach(ele =>
{
    stored3 += ele.innerHTML
})
sortedData2.innerHTML = stored3
}

    }

clearAll.onclick =  function()
{
    display.style.display = "grid" 
    ratedData.style.display = "none" 
    sortedData.style.display = "none" 
    sortedData2.style.display = "none"
    dileveryData.style.display = "none"
    ratedMore.style.display = "none"
    radio1.checked = false
    radio2.checked = false
    radio3.checked = false
    radio4.checked = false


}


closeBtn.onclick = function()
{
    filterSection.style.display = "none"
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"

}

mainFilter.onclick = function()
{
    filterSection.style.display = "flex"
    document.body.style.overflow = "hidden"
}