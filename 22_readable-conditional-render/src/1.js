function GreetingA({ inLogin, name }) {
  if (isLogin) {
    return <p>{`hi ${name}`}</p>;
  } else {
    return <p>no authority</p>;
  }
}

function GreetingB({isLogin,name}){
    return<p>{isLogin?`hi ${name}`: 'no authority'}</p>;
}