// onclick method
const image=document.getElementsByClassName("img1")[0];
    img_ori=image.src;
    image_arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYovNMf5sP8YRE84DtmIDByN6AibYLeIshGAaRNh5Uw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAg2kRpK8mtBebIEfk7oQofZgREtP0jyBFNks5Wa1K6g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAg2kRpK8mtBebIEfk7oQofZgREtP0jyBFNks5Wa1K6g&s=10"
    ]
    // myButton.style.background ="Green"


let counter=0;
const myFunction = ()=>{
    if (counter==5){
        image.src= img_ori;
        counter=0;
        return;
    }
    const imgLink = image_arr[counter];
    image.src=imgLink;
    counter +=1;

    console.log(counter);
} 






// // id method
// const myButton=document.getElementById("myButton");
// const myFun=()=>{
//     console.log("heheheheeheh");
    
// }
// myButton.onclick = myFun;

myButton.addEventListener("click",myFunction)
