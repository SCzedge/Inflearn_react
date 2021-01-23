function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return (
      <p className="greeting" onClick={showMenu}>
        {`hi ${name}`}
      </p>
    );
  } else {
    return (
      <p className="noAuth" onClick={goToLoginPage}>
        no authority
      </p>
    );
  }
}

function GreetingB({isLogin,name}){
    return(
        <p className={isLogin ? 'greeting': 'no Auth'}
        onClick={isLogin? showMenu: gotoLoginPage}
        >
            {isLogin ? `hi ${name}` : 'no authority'}
        </p>
    )
}