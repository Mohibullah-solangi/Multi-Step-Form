const toggle = () => {
  const toggle1 = document.getElementById("switch");

  if (toggle1.checked == true) {
    console.log("checked");
    let plan1 = document.getElementsByClassName("plan")[0];
    let plan2 = document.getElementsByClassName("plan")[1];
    let plan3 = document.getElementsByClassName("plan")[2];

    plan1.innerHTML = ` <img src="assets/images/icon-arcade.svg" alt=""><br><input type="radio" name="plan"
        id="plan1" onclick="border()"><br> <span>Arcade</span><br>
        $90/year<br>
        2 months free`;

    plan2.innerHTML = `<img src="assets/images/icon-advanced.svg" alt=""><br><input type="radio" name="plan"
        id="plan2" onclick="border()"><br><span>Advanced</span><br>

    $120/year<br>
    2 months free`;
    plan3.innerHTML = `<img src="assets/images/icon-pro.svg" alt=""><br><input type="radio" name="plan"
    id="plan3" onclick="border()"><br> <span>Pro</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

$150/year<br>
2 months free
`;
  } else if (toggle1.checked == false) {
    let plan1 = document.getElementsByClassName("plan")[0];
    let plan2 = document.getElementsByClassName("plan")[1];
    let plan3 = document.getElementsByClassName("plan")[2];
    console.log("unchecked");
    plan1.innerHTML = `<img src="assets/images/icon-arcade.svg" alt=""><br><input type="radio" name="plan"
    id="plan1" onclick="border()"><br> <span>Arcade</span><br>

$09/month`;
    plan2.innerHTML = ` <img src="assets/images/icon-advanced.svg" alt=""><br><input type="radio" name="plan"
    id="plan2" onclick="border()"><br><span>Advanced</span><br>

$12/month`;
    plan3.innerHTML = `<img src="assets/images/icon-pro.svg" alt=""><br><input type="radio" name="plan"
    id="plan3" onclick="border()"><br> <span>Pro</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

$15/month`;
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

  //summary display

  if (plan1.checked == true) {
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

  if (plan2.checked == true) {
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

  if (plan3.checked == true) {
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
};

const add_on_1 = (add_on_price) => {
  console.log(add_on_price);
  //summary add-on
  let add_on1 = document.getElementById("add-on-1");

  //summary display

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
  let summary_plan = document.getElementsByClassName("add-on-left")[5];
  summary_plan.style.display = "grid";
  summary_plan.style.gridTemplateColumns = "repeat(1, 1fr)";
  let div = document.createElement("div");
  div.innerHTML = `<div>Total (monthly)
  </div>

  <div id="total-price">+$${price}/mo</div>`;
  div.setAttribute("id", "add-on-third");

  summary_plan.replaceChildren(div);
};

const total_first1 = (price) => {
  
  let add_on1 = document.getElementById("add-on-1");
  

  if (add_on1.checked == true) {
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
  else if(add_on1.checked == false){
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


};









const total_first2 = (price) => {
  
  let add_on2 = document.getElementById("add-on-2");


  if (add_on2.checked == true) {
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
  else if(add_on2.checked == false){
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

};









const total_first3 = (price) => {
  let add_on3 = document.getElementById("add-on-3");
  

  if (add_on3.checked == true) {
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
  else if(add_on3.checked == false){
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

};
