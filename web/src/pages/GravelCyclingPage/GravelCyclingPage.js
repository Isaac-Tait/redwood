import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const GravelCyclingPage = () => {
  return (
    <BlogLayout>

      <h3>A Gravel Cycling Blog</h3>
          <p>Built using the venerable (and opinionated) package manager <a href="https://redwoodjs.com/">Redwood</a></p>

          <BlogPostsCell />

          <nav>
            <ol>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </ol>
          </nav>

    </BlogLayout>
  )
};

export default GravelCyclingPage
