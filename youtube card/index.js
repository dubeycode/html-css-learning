function createcard(title,cName,views,monthsold,duration,thumbnil){
    let viewstr
    if(views<100000){
         viewstr =views;
    }

    else if(views>1000000){
         viewstr =views/1000000 +"M";
    }

    else{
         viewstr =views/1000 +"k";
    }
    
    let html=` <div class="card">
           <div class="thumbnil">
            <img src="${thumbnil}" alt="pic">
            <div class="title">
                ${title}
               <div class="data">
                 <p>${cName}.</p>
                <p>${viewstr} views</p>
                <p>${monthsold}Months</p>
               </div>
            </div>
            </div>
            <div class="capsul">${duration}</div>
           </div>
        </div>
    `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+html

}


createcard(" Intro to frontend |sigma web dev video #1 ","CodeWithHarry",960000,8,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")
createcard(" Intro to backend |sigma web dev video #2 ","CodeWithHarry",560000,7,"25:07","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")
createcard(" Intro to nextjs |sigma web dev video #3 ","CodeWithHarry",9600000,8,"24:12","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")
createcard(" Intro to mongo db |sigma web dev video #4 ","CodeWithHarry",780000,7,"20:17","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")