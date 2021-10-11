import Head from "next/head"

const Home = () => {
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
        </div>
    )
}

export default Home
