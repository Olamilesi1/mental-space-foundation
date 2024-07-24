import style from '../styles/Blog.module.css'

function Blog() {
    return (

        <div>
        <div className={style.blogText}>
            <h1>BLOG</h1>
            <p>Page: Blog</p>
        </div> <br /><br />

        <div className={style.blogTexts}>
            <h3 className={style.blogTitle}>Blog</h3>
            <p>Blog</p>
            <hr />
            <p>June 12, 2024 . No Comments</p>
        </div>
        </div>
    )
}

export default Blog
