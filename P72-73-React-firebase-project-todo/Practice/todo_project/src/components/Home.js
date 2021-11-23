const Home = ()=>{
    return(
        <div className = 'container-fluid' style={{backgroundImage: 'url(https://www.techrepublic.com/a/hub/i/r/2020/01/09/e22ab1a3-aaff-4fb9-a16c-b35a8d6f2387/resize/1200x/6f662af9eab9a71ff3bc665c1bd24d50/istock-1127745240.jpg)', height: 'calc(100vh - 57px)', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: '30px'
        }}>
            <h1 className = 'text-center my-5 bg-dark text-white w-50 mx-auto p-2' style={{fontSize: '45px'}}>Welcome to your private <br/> ToDo List App</h1>
        </div>
    )
}

export default Home