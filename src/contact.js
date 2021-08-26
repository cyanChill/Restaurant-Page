import { selectCurrentPage, createIcon } from "./utility";

function createContactSection() {
  const section = document.createElement("div");
  section.id = "contact-page-information";

  const contactInfoBkg = document.createElement("div");
  contactInfoBkg.classList.add("contact-bkg");
  section.appendChild(contactInfoBkg);

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.id = "contact-information";
  section.appendChild(contactInfoContainer);

  const mapDiv = document.createElement("div");
  mapDiv.id = "map";
  section.appendChild(mapDiv);

  const locationDiv = document.createElement("div");
  locationDiv.id = "location";
  contactInfoContainer.appendChild(locationDiv);

  locationDiv.appendChild(createIcon("fas fa-map-marker-alt"));

  const address = document.createElement("div");
  address.id = "address";
  locationDiv.appendChild(address);

  const addressLine1 = document.createElement("p");
  addressLine1.textContent = "2018 Quail Drive";
  address.appendChild(addressLine1);
  const addressLine2 = document.createElement("p");
  addressLine2.textContent = "Concord, NC 28027";
  address.appendChild(addressLine2);

  const phoneDiv = document.createElement("div");
  phoneDiv.id = "phone";
  contactInfoContainer.appendChild(phoneDiv);

  phoneDiv.appendChild(createIcon("fas fa-phone-alt"));

  const phoneNum = document.createElement("p");
  phoneNum.textContent = "(202)-555-0118";
  phoneDiv.appendChild(phoneNum);

  const emailDiv = document.createElement("div");
  emailDiv.id = "email";
  contactInfoContainer.appendChild(emailDiv);

  emailDiv.appendChild(createIcon("fas fa-envelope"));

  const emailMsg = document.createElement("p");
  emailMsg.textContent = "Contact Through Email:";
  emailDiv.appendChild(emailMsg);

  const mapObj = document.createElement("object");
  mapObj.data =
    "https://www.openstreetmap.org/export/embed.html?bbox=-80.68001300096513%2C35.38459128466814%2C-80.67647248506547%2C35.386607453020225&amp;layer=mapnik";
  mapDiv.appendChild(mapObj);

  const emailForm = document.createElement("form");
  emailForm.id = "email-form";
  contactInfoContainer.appendChild(emailForm);

  const nameField = document.createElement("input");
  nameField.type = "text";
  nameField.placeholder = "Full Name";
  nameField.setAttribute("required", "");
  nameField.setAttribute("autocomplete", "off");
  emailForm.appendChild(nameField);

  const emailField = document.createElement("input");
  emailField.type = "text";
  emailField.placeholder = "Email Address";
  emailField.setAttribute("required", "");
  emailField.setAttribute("autocomplete", "off");
  emailForm.appendChild(emailField);

  const msgField = document.createElement("textarea");
  msgField.rows = 5;
  msgField.placeholder = "Message Contents";
  emailForm.appendChild(msgField);

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.classList.add("btn");
  submitBtn.textContent = "Submit";
  emailForm.appendChild(submitBtn);

  return section;
}

export default function displayContactPage() {
  const contentContainer = document.getElementById("page-content");

  contentContainer.textContent = "";
  contentContainer.appendChild(createContactSection());

  selectCurrentPage("contact");
}
