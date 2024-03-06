// challenge: what happens if we try to append jsx
// to the div root using .append() instead of ReactDOM

const page = (
  <div>
    <h1>WELCOME</h1>
    <h2>TO MY</h2>
    <h3>PAGE</h3>
  </div>
);

// let root = document.getElementById("root");
// root.append(JSON.stringify(page)); // shows up as objects and not dom elements

// challenge: fix the page

ReactDOM.render(page, document.getElementById("root"));
