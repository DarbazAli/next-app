import Head from "next/head"

const Home = ({ articles }) => {
    return (
        <div>
            <Head>
                <html lang='en'></html>
                <title>NextJS | Home</title>
                <meta name='keywords' content='Programming, Web development' />
                <meta
                    name='description'
                    content='NextJS is a fantastic tool to build full-stack web apps, it really helps to minimize the headache like, defining routes, creating endpoints and etc.'
                />
            </Head>
            <h1>Welcome to Next</h1>
            {articles.map((article) => (
                <ul key={article.id}>
                    <li>{article.title}</li>
                </ul>
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(
        "http://jsonplaceholder.typicode.com/posts?_limit=5"
    )
    const articles = await res.json()

    return {
        props: {
            articles,
        },
    }
}

export default Home
