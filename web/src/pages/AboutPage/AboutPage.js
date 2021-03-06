import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <h2>About theAuthor(🔰🤷🏼‍♂️);</h2>
      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <a href="https://github.com/Isaac-Tait/redwood" target="_blank">
        Repo
      </a>
    </BlogLayout>
  )
}

export default AboutPage
