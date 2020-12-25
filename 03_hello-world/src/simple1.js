function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "dislike" : "like";
  return <button onClick={() => setLiked(!liked)}>{text}</button>;
//   return React.createElement(
//     "button",
//     { onClick: () => setLiked(!liked) },
//     text
//   );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
        <LikeButton/>
        <div style={{marginTop:20}}>
             <span> count : </span>
            <span style={{marginRight: 10,color: 'red'}}> {count}</span>
            <button onClick={() => setCount(count + 1)}>up</button>
            <button onClick={() => setCount(count - 1)}>down</button>
        </div>
    </div>
  );
//   return React.createElement(
//     "div",
//     null,
//     React.createElement(likeButton),
//     React.createElement(
//       "div",
//       { style: { marginTop: 20 } },
//       React.createElement("span", null, "count: "),
//       React.createElement("span", { style: { marginRight: 10 } }, count),
//       React.createElement(
//         "button",
//         { onClick: () => setCount(count + 1) },
//         "up"
//       ),
//       React.createElement(
//         "button",
//         { onClick: () => setCount(count - 1) },
//         "down"
//       )
//     )
//   );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Container), domContainer);

//이렇게 사용
/* 
function helloworld(){
    return React.createElement(
        'div',
        null,
        React.createElement('p',null,'hello'),
        React.createElement('p',null,'world'),
    );
}
ReactDOM.render(React.createElement(helloworld),domContainer)
*/
