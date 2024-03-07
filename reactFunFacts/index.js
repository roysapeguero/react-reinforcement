/**
Challenge:

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Mini Challenge:
Move the `header` element from Page into
its own component called "Header"
*/

/**
Challenge:

- Move the `footer` into its own component called "Footer"
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="100px" alt="React Logo" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Popular library</li>
        <li>Get better at React</li>
        <li>It's great!</li>
      </ol>
    </div>
  );
}

function Footer() {
  return <footer>© 2024 Peguero development. All rights reserved.</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
