import { client } from "../../libs/client"
import Image from 'next/image'

const BlogId = ({ blog }) => {
    console.log(blog)
    return (
        <main>
            <h1>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
            />
            <Image 
            src={blog.image.url}
            layout="responsive"
            width={400}
             height={300}
            />
        </main>
    )
}


export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" })
    const paths = data.contents.map((content) => `/blog/${content.id}`)
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await client.get({ endpoint: "blog", contentId: id })
    return {
        props: {
            blog: data
        }
    }
}

export default BlogId
