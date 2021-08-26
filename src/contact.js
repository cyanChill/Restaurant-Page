import { selectCurrentPage } from "./utility";

const contentContainer = document.getElementById("content");

function createContactSection() {
  const section = document.createElement("div");
  section.id = "contact-page-information";
  section.innerHTML = `
    <div class="contact-bkg"></div>
    <div id="contact-information">
        <div id="location">
        <i class="fas fa-map-marker-alt"></i>
        <div id="address">
            <p>2018 Quail Drive</p>
            <p>Concord, NC 28027</p>
        </div>
        </div>
        <div id="phone">
        <i class="fas fa-phone-alt"></i>
        <p>(202)-555-0118</p>
        </div>
        <div id="email">
        <i class="fas fa-envelope"></i>
        <p>Contact Through Email:</p>
        </div>
        <form id="email-form">
        <input type="text" placeholder="Full Name" required autocomplete="off" />
        <input type="text" placeholder="Email Address" required autocomplete="off" />
        <textarea rows="5" placeholder="Message Contents"></textarea>
        <button type="button" class="btn">Submit</button>
        </form>
    </div>
    <div id="map">
        <object
        data="https://www.openstreetmap.org/export/embed.html?bbox=-80.68001300096513%2C35.38459128466814%2C-80.67647248506547%2C35.386607453020225&amp;layer=mapnik"
        ></object>
    </div>
  `;

  return section;
}

export default function displayContactPage() {
  contentContainer.innerHTML = "";
  contentContainer.appendChild(createContactSection());

  selectCurrentPage("contact");
}
