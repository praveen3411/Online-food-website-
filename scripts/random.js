let randomone=async(url)=>{
   try {
    let babyone=await fetch(url);
    let babaytwo=await babyone.json();
    return babaytwo.meals;
   } catch (error) {
    console.log(error)
   }
}




let appendinghere=(dataone,praveenone)=>{
    dataone.forEach((ele,index) => {
    let one=document.createElement("div");

    let two=document.createElement("img");
    two.setAttribute("src",ele.strMealThumb);

    let three=document.createElement("h2");
    three.innerText=`😋: ${ele.strCategory}`;

    let four=document.createElement("h2");
    four.innerText=`🪧: ${ele.strArea}`;

    let five=document.createElement("h2");
    five.innerText=`🍽️: ${ele.strMeal}`;

    let six=document.createElement("p");
    six.innerText=`👉 :${ele.strInstructions}`;

    one.append(two,three,four,five,six);

    praveenone.append(one);
});
}

export {randomone,appendinghere};