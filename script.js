const toggle = () => {
  const toggle1 = document.getElementById("switch");

  if (toggle1.checked == true) {
    console.log("checked");
    let plan1 = document.getElementsByClassName("plan")[0];
    let plan2 = document.getElementsByClassName("plan")[1];
    let plan3 = document.getElementsByClassName("plan")[2];


    let add_on1 = document.getElementsByClassName("add-on")[0];
    let add_on2 = document.getElementsByClassName("add-on")[1];
    let add_on3 = document.getElementsByClassName("add-on")[2];


    plan1.innerHTML = ` <img src="assets/images/icon-arcade.svg" alt=""><br><input type="radio" name="plan"
        id="plan1" onclick="border(this.value), total(this.value)" value="90"><br> <span>Arcade</span><br>
        $90/year<br>
        2 months free`;

    plan2.innerHTML = `<img src="assets/images/icon-advanced.svg" alt=""><br><input type="radio" name="plan"
        id="plan2" onclick="border(this.value), total(this.value)" value="120"><br><span>Advanced</span><br>

    $120/year<br>
    2 months free`;
    plan3.innerHTML = `<img src="assets/images/icon-pro.svg" alt=""><br><input type="radio" name="plan"
    id="plan3" onclick="border(this.value), total(this.value)" value="150"><br> <span>Pro</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

$150/year<br>
2 months free
`;


add_on1.innerHTML = `<input type="checkbox" name="add-on-1" id="add-on-1" onclick="add_on_1(10), total_first1(this.value)" value="10">

<div class="add-on-left">
  <div>
    <label for="add-on-1">Online service</label><br>

    Access to multiplayer games
  </div>

  <div class="prices">$10/yr</div>
</div>`;


add_on2.innerHTML = `<input type="checkbox" name="add-on-2" id="add-on-2" onclick="add_on_2(20), total_first2(this.value)" value="20">

<div class="add-on-left">
  <div>

    <label for="add-on-2">Larger storage</label><br>

    Extra 1TB of cloud save
  </div>

  <div class="prices">$20/yr</div>
</div>`;

add_on3.innerHTML = `<input type="checkbox" name="add-on-3" id="add-on-3" onclick="add_on_3(20), total_first3(this.value)" value="20">

<div class="add-on-left">

  <div>
    <label for="add-on-3">Customizable Profile</label><br>

    Custom theme on your profile
  </div>

  <div class="prices">$20/yr</div>
</div>`;



  } else if (toggle1.checked == false) {
    let plan1 = document.getElementsByClassName("plan")[0];
    let plan2 = document.getElementsByClassName("plan")[1];
    let plan3 = document.getElementsByClassName("plan")[2];

    let add_on1 = document.getElementsByClassName("add-on")[0];
    let add_on2 = document.getElementsByClassName("add-on")[1];
    let add_on3 = document.getElementsByClassName("add-on")[2];





    console.log("unchecked");
    plan1.innerHTML = `<img src="assets/images/icon-arcade.svg" alt=""><br><input type="radio" name="plan"
    id="plan1" onclick="border(this.value), total(this.value)" value="09"><br> <span>Arcade</span><br>

$09/month`;
    plan2.innerHTML = ` <img src="assets/images/icon-advanced.svg" alt=""><br><input type="radio" name="plan"
    id="plan2" onclick="border(this.value), total(this.value)" value="12"><br><span>Advanced</span><br>

$12/month`;
    plan3.innerHTML = `<img src="assets/images/icon-pro.svg" alt=""><br><input type="radio" name="plan"
    id="plan3" onclick="border(this.value), total(this.value)" value="15"><br> <span>Pro</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

$15/month`;


add_on1.innerHTML = `<input type="checkbox" name="add-on-1" id="add-on-1" onclick="add_on_1(1), total_first1(this.value)" value="1">

<div class="add-on-left">
  <div>
    <label for="add-on-1">Online service</label><br>

    Access to multiplayer games
  </div>

  <div class="prices">$1/month</div>
</div>`;


add_on2.innerHTML = `<input type="checkbox" name="add-on-2" id="add-on-2" onclick="add_on_2(2), total_first2(this.value)" value="2">

<div class="add-on-left">
  <div>

    <label for="add-on-2">Larger storage</label><br>

    Extra 1TB of cloud save
  </div>

  <div class="prices">$2/month</div>
</div>`;

add_on3.innerHTML = `  <input type="checkbox" name="add-on-3" id="add-on-3" onclick="add_on_3(2), total_first3(this.value)" value="2">

<div class="add-on-left">

  <div>
    <label for="add-on-3">Customizable Profile</label><br>

    Custom theme on your profile
  </div>

  <div class="prices">$2/month</div>
</div>`;


  }
};

const border = (plan_price) => {
  console.log(plan_price);

  //border changing
  let plan1 = document.getElementById("plan1");
  let plan2 = document.getElementById("plan2");
  let plan3 = document.getElementById("plan3");

  if (
    plan1.checked == true &&
    plan2.checked == false &&
    plan3.checked == false
  ) {
    let border1 = document.getElementById("border1");
    border1.style.border = "1px solid hsl(213, 96%, 18%)"; //blue
    console.log("blue 1");
  } else if (
    plan1.checked == false &&
    (plan2.checked == true || plan3.checked == true)
  ) {
    let border1 = document.getElementById("border1");
    border1.style.border = "1px solid hsl(229, 24%, 87%)"; //grey
    console.log("grey 1");
  }
  if (
    plan2.checked == true &&
    plan1.checked == false &&
    plan3.checked == false
  ) {
    let plan2 = document.getElementById("border2");
    plan2.style.border = "1px solid hsl(213, 96%, 18%)"; //blue
    console.log("blue 2");
  } else if (
    plan2.checked == false &&
    (plan1.checked == true || plan3.checked == true)
  ) {
    let plan2 = document.getElementById("border2");
    plan2.style.border = "1px solid hsl(229, 24%, 87%)"; //grey
    console.log("grey 2");
  }

  if (
    plan3.checked == true &&
    plan2.checked == false &&
    plan1.checked == false
  ) {
    let plan3 = document.getElementById("border3");
    plan3.style.border = "1px solid hsl(213, 96%, 18%)"; //blue
    console.log("blue 3");
  } else if (
    plan3.checked == false &&
    (plan2.checked == true || plan1.checked == true)
  ) {
    let plan3 = document.getElementById("border3");
    plan3.style.border = "1px solid hsl(229, 24%, 87%)"; //grey
    console.log("grey 3");
  }

  //summary display monthly

  if (plan1.checked == true && plan_price == "09") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Arcade (Montly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$09/mo</div>`;
    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 1");
  }

  if (plan2.checked == true  && plan_price == "12") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Advanced (Montly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$12/mo</div>`;

    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 2");
  }

  if (plan3.checked == true  && plan_price == "15") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Pro (Montly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$15/mo</div>`;
    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 3");
  }


  //summary yearly

  
  if (plan1.checked == true && plan_price == "90") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Arcade (Yearly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$90/yr</div>`;
    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 1");
  }

  if (plan2.checked == true  && plan_price == "120") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Advanced (Yearly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$120/yr</div>`;

    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 2");
  }

  if (plan3.checked == true  && plan_price == "150") {
    let summary_plan = document.getElementsByClassName("add-on-left")[3];
    let div = document.createElement("div");
    div.innerHTML = `<div><label for="add-on-1">Pro (Yearly)</label><br>

      <a href="#second">Change</a>
    </div>

    <div class="price-plan">$150/yr</div>`;
    div.classList.add("add-on-left");

    summary_plan.replaceWith(div);
    console.log("replace 3");
  }
};

const add_on_1 = (add_on_price) => {
  console.log(add_on_price);
  //summary add-on
  let add_on1 = document.getElementById("add-on-1");

  //summary display montly

  if (add_on1.checked == true) {
    let summary_plan = document.getElementsByClassName("add-on-left")[4];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Online service
  </div>

  <div class="price-plan">+$${add_on_price}/mo</div>`;
    div.setAttribute("id", "add-on-first");

    summary_plan.append(div);
    console.log("replace 1");
  } else if (add_on1.checked == false) {
    let hide1 = document.getElementById("add-on-first");
    hide1.remove();
  }
};

const add_on_2 = (add_on_price) => {
  console.log(add_on_price);
  //summary add-on

  let add_on2 = document.getElementById("add-on-2");

  //summary display

  if (add_on2.checked == true) {
    let summary_plan = document.getElementsByClassName("add-on-left")[4];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";

    let div = document.createElement("div");
    div.innerHTML = `<div>Larger storage
  </div>

  <div class="price-plan">+$${add_on_price}/mo</div>`;
    div.setAttribute("id", "add-on-second");

    summary_plan.append(div);
    console.log("replace 1");
  } else if (add_on2.checked == false) {
    let hide2 = document.getElementById("add-on-second");
    hide2.remove();
  }
};

const add_on_3 = (add_on_price) => {
  console.log(add_on_price);
  //summary add-on

  let add_on3 = document.getElementById("add-on-3");

  //summary display

  if (add_on3.checked == true) {
    let summary_plan = document.getElementsByClassName("add-on-left")[4];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";

    let div = document.createElement("div");
    div.innerHTML = `<div>Customizable Profile
    </div>
  
    <div class="price-plan">+$${add_on_price}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.append(div);
    console.log("replace 1");
  } else if (add_on3.checked == false) {
    let hide3 = document.getElementById("add-on-third");
    hide3.remove();
  }
};

const total = (price) => {

  if(price <= 15){ 
    
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);


    let summary_plan = document.getElementsByClassName("add-on-left")[5];
  summary_plan.style.display = "grid";
  summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
 
let total_plan = document.getElementById("add-on-third");
total_plan.innerHTML = `<div>Total (monthly)
</div>

<div id="total-price">+$${totl}/mo</div>`
}

  else{
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    
    let summary_plan = document.getElementsByClassName("add-on-left")[5];
  summary_plan.style.display = "grid";
  summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
  
let total_plan = document.getElementById("add-on-third");
total_plan.innerHTML = `<div>Total (Yearly)
</div>

<div id="total-price">+$${totl}/yr</div>`}
 
};

const total_first1 = (price) => {
  
  let add_on1 = document.getElementById("add-on-1");
  

  if (add_on1.checked == true && price == "1") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on1.checked == false && price == "1"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }



  
  if (add_on1.checked == true && price == "10") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on1.checked == false && price == "10"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }

};









const total_first2 = (price) => {
  
  let add_on2 = document.getElementById("add-on-2");


  if (add_on2.checked == true  && price == "2") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on2.checked == false && price == "2"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }


  
  if (add_on2.checked == true  && price == "20") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on2.checked == false && price == "20"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }

};









const total_first3 = (price) => {
  let add_on3 = document.getElementById("add-on-3");
  

  if (add_on3.checked == true && price == "2") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on3.checked == false && price == "2"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 4);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${totl}/mo</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }


  if (add_on3.checked == true && price == "20") {
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a + b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }
  else if(add_on3.checked == false && price == "20"){
    let total = document.getElementById("total-price");
    let x = total.innerText;
    let result = x.substring(2, 5);
    let a = parseInt(result);
    let b = parseInt(price);

    let totl = a - b;
    console.log(totl);

    let summary_plan = document.getElementsByClassName("add-on-left")[5];
    summary_plan.style.display = "grid";
    summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
    let div = document.createElement("div");
    div.innerHTML = `<div>Total (Yearly)
  </div>

  <div id="total-price">+$${totl}/yr</div>`;
    div.setAttribute("id", "add-on-third");

    summary_plan.replaceChildren(div);
  }

};


const btn = ()=>{
 
  let btn_back = document.getElementById("btn-back");

  btn_back.disabled = false;

  let first = document.getElementById("first");
  let second = document.getElementById("second");
 

    first.style.visibility = "hidden";
    second.style.display = "grid";
    console.log("first")

    let btn_class = document.getElementsByClassName("button")[0];

    btn_class.innerHTML = ` <button id="btn-back" disabled>go back</button>
    <button id="btn-next" onclick="btn1()">Next Step</button>`
  
 

}

const btn1 = ()=>{
  let btn_next = document.getElementById("btn-next");
  let btn_back = document.getElementById("btn-back");

  btn_back.disabled = false;

 
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  

    second.style.visibility = "hidden";
    third.style.display = "grid";
    console.log("first")

    let btn_class = document.getElementsByClassName("button")[0];

    btn_class.innerHTML = ` <button id="btn-back" disabled>go back</button>
    <button id="btn-next" onclick="btn2()">Next Step</button>`
  
}


const btn2 = ()=>{
  let btn_next = document.getElementById("btn-next");
  let btn_back = document.getElementById("btn-back");

  btn_back.disabled = false;
 
  

 
  let fourth = document.getElementById("fourth");
  let third = document.getElementById("third");
  

    third.style.visibility = "hidden";
    fourth.style.display = "grid";
    console.log("first")

    let btn_class = document.getElementsByClassName("button")[0];

    btn_class.innerHTML = ` <button id="btn-back" disabled>go back</button>
    <button id="btn-next" onclick="btn3()" style = "padding: 0"><input type="submit" onclick="btn3" value="Confirm"></button>`
  
}

const btn3 = () =>{
  let fourth = document.getElementById("fourth");
  let thankyou = document.getElementById("thank-you");

  let btn_class = document.getElementsByClassName("button")[0];

  btn_class.style.display = "none";
  

  fourth.style.visibility = "hidden";
  thankyou.style.display = "grid";

}
