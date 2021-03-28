const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//  Question 1

const cat = {
  complain: function meow() {
    console.log("Meow!");
  },
};

cat.complain();

//  Question 2 DONE

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//  Question 3 DONE

heading.style.fontSize = "2em";

//  Question 4 DONE

heading.classList.toggle("subheading");

//  Question 5 DONE

var paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//  Question 6 DONE

var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//  Question 7 DONE

function felineList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log("Name of the cat: " + list[i].name);
  }
}

felineList(cats);

//  Question 8 DONE

function makeCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let ageCat = "Age unknown";

    if (cats[i].age) {
      ageCat = cats[i].age;
    }

    html += `<div>
                  <h5> Name: ${cats[i].name}</h5>
                  <p> Age: ${ageCat} </p>
              </div>`;
  }
  return html;
}

const catList = makeCats(cats);
const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = catList;
