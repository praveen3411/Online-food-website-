let foodapp=async(url)=>{
try {
    let take=await fetch(url);
    let make=await take.json();
    return make.meals;
} catch (error) {
    console.log(error)
}
}





let appendone=(data,location)=>{
    data.forEach((ele,index) => {
        let create=document.createElement("div");

        let one=document.createElement("img")
        one.setAttribute("src",ele.strMealThumb);
        
        let two=document.createElement("h2");
        two.innerText=`😋: ${ele.strMeal}`;

        let three=document.createElement("h2");
        three.innerText=`🪧: ${ele.strArea}`;

        let four=document.createElement("h2");
        four.innerText=`🍽️: ${ele.strCategory}`;

        let fiv=document.createElement("p");
        fiv.innerText=`👉: ${ele.strInstructions}`;

        create.append(one,two,three,four,fiv);

        location.append(create);
    });
}

export {foodapp,appendone};