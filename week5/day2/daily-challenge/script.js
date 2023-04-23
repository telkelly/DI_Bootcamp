const btn = document.getElementById("lib-button");
const storySpan = document.getElementById("story");

btn.addEventListener("click", function (e) {
  storySpan.innerHTML = "";
  e.preventDefault();
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;
  const stories = [
    `After a heavy ${noun} on the highest mount was ${adjective} ${person} that stands there and ${verb} dreaming about his ${place}.`,
    `A ${noun} used to take a ${adjective} nap every afternoon.When ${person} asked him why he did so, he said that he ${verb} to ${place} to meet ancient sages.`,
    `${person} one day ridiculed the short ${noun} and slow pace of the Tortoise, who replied, laughing: "Though you be swift as the wind, I will ${verb} you in a race. On the ${place} appointed for the ${adjective} race the two started together."`,
  ];
  if (
    noun == "" ||
    adjective == "" ||
    person == "" ||
    verb == "" ||
    place == ""
  ) {
    alert("Please fill all the forms");
  }

  let randomStory = Math.floor(Math.random() * stories.length);
  let newStory = document.createTextNode(stories[randomStory]);
  storySpan.append(newStory);
});
