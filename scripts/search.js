let choosefood=async(inpu)=>{
   try {
    let helldata=await fetch(inpu);
    let belldata=await helldata.json();
    return belldata.meals;
   } catch (error) {
    console.log(error)
   }
}

let maindata=(main,local)=>{
    local.innerHTML=null;
    if(main==undefined){
        return false;
    }
    main.forEach((ele,index) => {
        let di=document.createElement("div");

        let first=document.createElement("img");
        first.setAttribute("src",ele.strMealThumb);

        let second=document.createElement("h2");
        second.innerText=`😋 :${ele.strMeal}`;

        let third=document.createElement("h2");
        third.innerText=`🪧: ${ele.strArea}`;

        let four=document.createElement("h2");
        four.innerText=`🍽️: ${ele.strCategory}`;

        let five=document.createElement("h2");
        five.innerText=`📦: ${ele.strMeasure1}`;

        let six=document.createElement("h2");
        six.innerText=`👉: ${ele.strInstructions}`;

        di.append(first,second,third,four,five,six);

        local.append(di);
    });
}

export {choosefood,maindata};