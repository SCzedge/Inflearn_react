function Greeting({ isEvent,isLogin,name,cahs}){
    return(
        <div>
            welcome
            {isEvent ? (
                <div>
                    <p>don't miss today event</p>
                    <button conClick={onClickEvent}>event join</button>
                </div>
            ): isLogin?(
                cash<=100000 ? (
                    <div>
                        <p>hi ${name}</p>
                        <p>you have {cash}won</p>
                    </div>
                ): null
            ): null}
        </div>
    )
}