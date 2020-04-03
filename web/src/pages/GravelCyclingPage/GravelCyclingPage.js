import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const GravelCyclingPage = () => {
  return (
    <BlogLayout>
      <img
        className="image"
        src="https://macadam-grinding-photos.s3-us-west-2.amazonaws.com/Initial+Content/Photos/gravel+riding-gravel+grinding-gravel+cyclist-bicycles-bike+riding-adventure-cyclist-khs+grit+110.jpg"
        alt="gravel bike with an ocean vista backdrop"
      />
      <h3>
        The future home of{' '}
        <a href="http://www.macadamgrinding.com" target="_blank">
          Macadam Grinding
        </a>{' '}
        - A Gravel Cycling Blog
      </h3>
      <p>
        Built using the venerable (and opinionated) framework{' '}
        <a href="https://redwoodjs.com/">Redwood</a>
      </p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default GravelCyclingPage
