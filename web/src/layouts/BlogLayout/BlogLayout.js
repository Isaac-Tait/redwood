import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.gravelCycling()}>Macadam Grinding</Link>
        </h1>
      </header>
      <main>{children}</main>
    </>
  )
};

export default BlogLayout
