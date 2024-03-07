/**
Challenge:

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="100px" alt="React Logo" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Popular library</li>
        <li>Get better at React</li>
        <li>It's great!</li>
      </ol>
      <footer>© 2024 Peguero development. All rights reserved.</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
