const htmlCards = [
  {
    term: "DOCTYPE",
    definition: "Defines the document type and version of HTML",
  },
  { term: "a", definition: "Defines a hyperlink" },
  { term: "p", definition: "Defines a paragraph" },
  { term: "div", definition: "Defines a division or section" },
  { term: "span", definition: "Defines a section in a document" },
  { term: "h1-h6", definition: "Defines HTML headings" },
  { term: "img", definition: "Defines an image" },
  { term: "ul", definition: "Defines an unordered list" },
  { term: "ol", definition: "Defines an ordered list" },
  { term: "li", definition: "Defines a list item" },
  { term: "table", definition: "Defines a table" },
  { term: "tr", definition: "Defines a row in a table" },
  { term: "td", definition: "Defines a cell in a table" },
  { term: "th", definition: "Defines a header cell in a table" },
  { term: "form", definition: "Defines an HTML form for user input" },
  { term: "input", definition: "Defines an input control" },
  { term: "button", definition: "Defines a clickable button" },
  {
    term: "link",
    definition:
      "Defines the relationship between a document and an external resource",
  },
  { term: "meta", definition: "Defines metadata about an HTML document" },
  { term: "style", definition: "Defines style information for a document" },
];

const cssCards = [
  { term: "color", definition: "Sets the color of text" },
  {
    term: "background-color",
    definition: "Sets the background color of an element",
  },
  { term: "font-size", definition: "Sets the size of the font" },
  { term: "margin", definition: "Sets the margin space outside an element" },
  { term: "padding", definition: "Sets the padding space inside an element" },
  { term: "border", definition: "Sets the border around an element" },
  { term: "display", definition: "Sets how an element is displayed" },
  { term: "position", definition: "Sets the position of an element" },
  { term: "width", definition: "Sets the width of an element" },
  { term: "height", definition: "Sets the height of an element" },
  { term: "flex", definition: "Sets the flexible length of a flex item" },
  { term: "grid", definition: "Sets a grid-based layout system" },
  { term: "align-items", definition: "Aligns flex items along the cross axis" },
  {
    term: "justify-content",
    definition: "Aligns flex items along the main axis",
  },
  { term: "text-align", definition: "Sets the horizontal alignment of text" },
  { term: "font-family", definition: "Sets the font family" },
  { term: "line-height", definition: "Sets the space between lines of text" },
  {
    term: "background-image",
    definition: "Sets a background image for an element",
  },
  {
    term: "overflow",
    definition: "Sets what happens if content overflows an element's box",
  },
  { term: "z-index", definition: "Sets the stack order of an element" },
];

const javascriptCards = [
  { term: "let", definition: "Declares a block-scoped variable" },
  { term: "const", definition: "Declares a block-scoped, read-only variable" },
  { term: "var", definition: "Declares a variable" },
  { term: "function", definition: "Declares a function" },
  { term: "return", definition: "Exits a function and returns a value" },
  { term: "if", definition: "Executes a block of code if a condition is true" },
  {
    term: "else",
    definition: "Executes a block of code if the condition is false",
  },
  {
    term: "for",
    definition:
      "Creates a loop that is executed as long as a condition is true",
  },
  {
    term: "while",
    definition: "Creates a loop that executes as long as a condition is true",
  },
  {
    term: "do",
    definition:
      "Creates a loop that executes once before checking the condition",
  },
  {
    term: "switch",
    definition: "Executes a block of code based on different cases",
  },
  { term: "try", definition: "Tests a block of code for errors" },
  {
    term: "catch",
    definition: "Handles the error if it occurs in the try block",
  },
  {
    term: "finally",
    definition: "Executes a block of code after try and catch",
  },
  { term: "class", definition: "Defines a class" },
  {
    term: "constructor",
    definition: "Defines a constructor method in a class",
  },
  { term: "this", definition: "Refers to the current object" },
  { term: "new", definition: "Creates an instance of an object" },
  { term: "import", definition: "Imports a module" },
  { term: "export", definition: "Exports a module" },
];

let currentHtmlCard = 0;
let currentCssCard = 0;
let currentJavascriptCard = 0;

function showSection(section) {
  document.querySelectorAll(".flashcard-section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(section).classList.add("active");
  renderFlashcards(section);
}

function renderFlashcards(section) {
  let cards;
  let currentCardIndex;
  switch (section) {
    case "html":
      cards = htmlCards;
      currentCardIndex = currentHtmlCard;
      break;
    case "css":
      cards = cssCards;
      currentCardIndex = currentCssCard;
      break;
    case "javascript":
      cards = javascriptCards;
      currentCardIndex = currentJavascriptCard;
      break;
  }

  const container = document.querySelector(`#${section} .flashcard-container`);
  container.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("flashcard");
  card.innerHTML = `
      <div class="front">${cards[currentCardIndex].term}</div>
      <div class="back">${cards[currentCardIndex].definition}</div>
    `;
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
}

function prevCard(section) {
  switch (section) {
    case "html":
      currentHtmlCard =
        currentHtmlCard === 0 ? htmlCards.length - 1 : currentHtmlCard - 1;
      break;
    case "css":
      currentCssCard =
        currentCssCard === 0 ? cssCards.length - 1 : currentCssCard - 1;
      break;
    case "javascript":
      currentJavascriptCard =
        currentJavascriptCard === 0
          ? javascriptCards.length - 1
          : currentJavascriptCard - 1;
      break;
  }
  renderFlashcards(section);
}

function nextCard(section) {
  switch (section) {
    case "html":
      currentHtmlCard =
        currentHtmlCard === htmlCards.length - 1 ? 0 : currentHtmlCard + 1;
      break;
    case "css":
      currentCssCard =
        currentCssCard === cssCards.length - 1 ? 0 : currentCssCard + 1;
      break;
    case "javascript":
      currentJavascriptCard =
        currentJavascriptCard === javascriptCards.length - 1
          ? 0
          : currentJavascriptCard + 1;
      break;
  }
  renderFlashcards(section);
}

// Initialize the first section
showSection("html");
