const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const body = {
    email,
    message,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch("/formData", options)
    .then((res) => res.text())
    .then((res) => displayRes(res))
    .catch((err) => console.log(err));

  console.log(email, message);
});

function displayRes(text) {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");

  li.append(text);
  messages.appendChild(li);
}
