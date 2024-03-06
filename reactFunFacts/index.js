/*
Challenge: Starting from scratch, build and render the
HTML for our section project.
*/

const funFacts = (
  <div>
    <img width="100px" src="./react-logo.png" alt="React Logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(funFacts);
