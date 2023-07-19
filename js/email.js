const sendMail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject:
      window.location.href.slice(22) === "contact-us.html"
        ? document.getElementById("subject").value
        : "",
    number:
      window.location.href.slice(22) === "contact-us.html"
        ? document.getElementById("number").value
        : "",
  };
  const serviceId = "service_6d6dza9";
  const templateId = "template_lxsa2fs";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      window.location.href.slice(22) === "contact-us.html"
        ? (document.getElementById("subject").value = "")
        : "";
      window.location.href.slice(22) === "contact-us.html"
        ? (document.getElementById("number").value = "")
        : "";
      alert("Your message was sent successfully.");
    })
    .catch((err) => console.log(err));
};

console.log(window.location.href.slice(22));
if (window.location.href.slice(22) === "contact-us.html") {
  let formSubmit = document.getElementById("form2");
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();
  });
} else {
  let formSubmit = document.getElementById("contact-form");
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();
  });
}
