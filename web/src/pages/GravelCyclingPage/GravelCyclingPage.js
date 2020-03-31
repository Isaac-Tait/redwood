import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const GravelCyclingPage = () => {
  return (
    <BlogLayout>

      <h3>The future home of <a href="http://www.macadamgrinding.com" target="_blank">Macadam Grinding</a> - A Gravel Cycling Blog</h3>
          <p>Built using the venerable (and opinionated) framework <a href="https://redwoodjs.com/">Redwood</a></p>

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
