(()=>{"use strict";function e(e){return e.toLowerCase().replace(/\s/g,"-")}function n(n){const t=e(n);document.querySelectorAll("a.nav-link").forEach((e=>e.classList.remove("selected"))),document.querySelector(`a[data-page="${t}"]`).classList.add("selected")}const t=document.getElementById("content");function i(){t.innerHTML="",t.appendChild(function(){const e=document.createElement("header");return e.id="welcoming",e.innerHTML='\n    <div class="text-logo">\n        <span class="miniturize">MINITURIZED</span>\n        <span>FOODS</span></div>\n    <p class="tag-line">The best Instagrammable foods</p>\n  ',e}()),t.appendChild(function(){const e=document.createElement("section");return e.id="business-hours",e.innerHTML='\n    <div class="hours-bkg"></div>\n    <i class="fas fa-calendar-alt header"></i>\n    <p class="header">Hours</p>\n    <div id="day">\n      <p>Mon</p>\n      <p>Tue</p>\n      <p>Wed</p>\n      <p>Thu</p>\n      <p>Fri</p>\n      <p>Sat</p>\n      <p>Sun</p>\n    </div>\n    <div id="hours">\n      <p>12pm-6pm</p>\n      <p>Closed</p>\n      <p>12pm-6pm</p>\n      <p>Closed</p>\n      <p>12pm-4pm</p>\n      <p>2pm-6pm</p>\n      <p>2pm-6pm</p>\n    </div>\n  ',e}()),t.appendChild(function(){const e=document.createElement("section");return e.id="socials",e.innerHTML='\n    <p>Socials</p>\n    <a href="#"><i class="fab fa-facebook"></i></a>\n    <a href="#"><i class="fab fa-instagram"></i></a>\n    <a href="#"><i class="fab fa-twitter"></i></a>\n  ',e}());const e=document.createElement("img");e.classList.add("hero-img"),e.src="./img/tiny_fruit_tart.png",e.alt="tiny fruit tart",t.appendChild(e),n("home")}const a=[{name:"Miniturized Breakfast Platter",img:"./img/miniturized_breakfast_platter.png",description:"What's the best way to start off the day, a good ol' English breakfast. What makes it cooler? Miniturizing it.",price:"$ 14.99"},{name:"Miniturized Pancakes",img:"./img/miniturized_pancakes.png",description:"Eat them individually or all in 1 bite! Comes with butter, syrup, and jam!",price:"$ 4.99"}],r=[{name:"Miniturized Cheeseburger",img:"./img/miniturized_cheeseburger.png",description:"An American classic, just smaller.",price:"$ 9.99"},{name:"Miniturized Pizza",img:"./img/miniturized_pizza.png",description:"Buffalo mozzarella with a sauce made from san marzano tomatoes, along with olives and pepperoni.",price:"$ 7.99"}],d=[{name:"Miniturized Cake",img:"./img/miniturized_cake.png",description:"A 12-layerd rainbow cake. Great for brightening up your day!",price:"$ 9.99"},{name:"Miniturized Fruit Tart",img:"./img/miniturized_fruit_tart.png",description:"Each tart crafted with are with our world-famous custard cream.",price:"$ 9.99"}],s=document.getElementById("content");function c(n,t){const i=document.createElement("esction");i.id=e(n),i.classList.add("meal");const a=document.createElement("p");a.classList.add("header"),a.textContent=n,i.appendChild(a);const r=document.createElement("div");return r.classList.add("meals"),i.appendChild(r),t.forEach((e=>{const n=function(e){const n=document.createElement("div");return n.classList.add("meal-card"),n.innerHTML=`\n    <img\n        src="${e.img}"\n        alt="${e.name}"\n        class="meal-card-img"\n    />\n    <div class="meal-information">\n        <p class="meal-name">${e.name}</p>\n        <div class="description">\n        <p class="meal-description">${e.description}</p>\n        <p class="price">${e.price}</p>\n        </div>\n    </div>\n  `,n}(e);r.appendChild(n)})),i}const o=document.getElementById("content");i();const p=document.querySelector("a[data-page='home']"),l=document.querySelector("a[data-page='menu']"),m=document.querySelector("a[data-page='contact']");p.addEventListener("click",(()=>{i(),v()})),l.addEventListener("click",(()=>{s.innerHTML="",s.appendChild(c("Breakfast",a)),s.appendChild(c("Lunch",r)),s.appendChild(c("Dessert",d)),n("menu"),v()})),m.addEventListener("click",(()=>{o.innerHTML="",o.appendChild(function(){const e=document.createElement("div");return e.id="contact-page-information",e.innerHTML='\n    <div class="contact-bkg"></div>\n    <div id="contact-information">\n        <div id="location">\n        <i class="fas fa-map-marker-alt"></i>\n        <div id="address">\n            <p>2018 Quail Drive</p>\n            <p>Concord, NC 28027</p>\n        </div>\n        </div>\n        <div id="phone">\n        <i class="fas fa-phone-alt"></i>\n        <p>(202)-555-0118</p>\n        </div>\n        <div id="email">\n        <i class="fas fa-envelope"></i>\n        <p>Contact Through Email:</p>\n        </div>\n        <form id="email-form">\n        <input type="text" placeholder="Full Name" required autocomplete="off" />\n        <input type="text" placeholder="Email Address" required autocomplete="off" />\n        <textarea rows="5" placeholder="Message Contents"></textarea>\n        <button type="button" class="btn">Submit</button>\n        </form>\n    </div>\n    <div id="map">\n        <object\n        data="https://www.openstreetmap.org/export/embed.html?bbox=-80.68001300096513%2C35.38459128466814%2C-80.67647248506547%2C35.386607453020225&amp;layer=mapnik"\n        ></object>\n    </div>\n  ',e}()),n("contact"),v()}));const u=document.getElementById("nav-bar"),h=document.querySelectorAll("#nav-bar > a"),f=document.createElement("span");function g(){y(this)}function v(){y(document.querySelector("a.selected"))}function y(e){const n=u.getBoundingClientRect(),t=e.getBoundingClientRect(),i=t.width,a=t.height,r=t.top-n.top+window.scrollY,d=t.left-n.left+window.scrollX;f.style.width=`${i}px`,f.style.height=`${a}px`,f.style.transform=`translate(${d}px, ${r}px)`}f.classList.add("highlight"),u.append(f),f.style.opacity=0,v(),f.addEventListener("transitionend",(()=>{f.style.opacity=1})),h.forEach((e=>e.addEventListener("mouseenter",g))),h.forEach((e=>e.addEventListener("mouseleave",v))),window.addEventListener("resize",v)})();