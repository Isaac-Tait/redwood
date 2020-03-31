import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = (props) => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <TextField name="name" placeholder="Enter your Name" />
        <TextField name="email" placeholder="What is your email?" />
        <TextAreaField name="Message text" />
        <Submit>Send</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
