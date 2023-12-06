const blogsData = [{
    id: 1,
    slug: 'First-Blog-Title',
    content: 'This is the content of my first blog post.'
},
{
    id: 2,
    slug: 'Second-Blog-Title',
    content: 'This is the content of my second blog post.'
}]
export default function Blogs ({params}) {
  const selectBlog = blogsData.filter((item)=>item.slug === params.slug)
    return (
    <div>
      <h1>{selectBlog[0]?.content}</h1>
    </div>
  )
}