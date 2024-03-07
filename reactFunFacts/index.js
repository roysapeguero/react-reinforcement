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

/**
Challenge:

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./react-logo.png" alt="React Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
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
  return (
    <footer className="footer">
      <small>© 2024 Peguero development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
