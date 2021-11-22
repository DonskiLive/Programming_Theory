const Home = () => {
    return (
        <div className='container-fluid' style={{ backgroundImage: 'url(https://media.wired.com/photos/5fd2c29c2a4ddaf3b6389694/16:9/w_1280%2Cc_limit/Gear-Books-Roundup-671406905.jpg)', height: '100vh', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: '200px'}}>
            <div className = 'text-center bg-light text-dark w-50 mx-auto p-3'>
                <h1 className = 'text-primary' style ={{fontSize:'36px'}}>What to Read?</h1>
                <h4>Top 10 Most Interesting Books</h4>
            </div>
        </div>
    )
}

export default Home