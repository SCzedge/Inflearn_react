function Greeting({isLogin,name,cash}){
    return(
        <div>
            welcome
            {isLogin && (
                <div>
                    <p>hi {name}</p>
                    <p>account balance is {cash}krw</p>
                </div>
            )}
        </div>
    );
}