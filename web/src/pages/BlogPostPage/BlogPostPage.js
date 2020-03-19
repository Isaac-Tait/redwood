import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = () => {
  return (
    <BlogLayout>
      <BlogPostCell id={id}/>
    </BlogLayout>
  )
}

export default BlogPostPage