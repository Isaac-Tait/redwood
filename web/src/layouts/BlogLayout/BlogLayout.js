import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.gravelCycling()}>Macadam Grinding</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <a href="https://www.mountaintopcoding.com">
            mountainTopCoding(&#9968;);
          </a>{' '}
          project
        </p>
      </footer>
    </>
  )
}

export default BlogLayout
