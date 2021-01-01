function Todo({ title,desc}){
    const[priority,setPriority] = useState('high');
    function onCLick(){
        setPriority(priority === 'high'? 'low': 'high');
    }
    return (
        <div>
            <Title title={title}/>
            <p>{desc}</p>
            <p>{priority === 'high' ? 'priority_high' : 'priority_low'}</p>
        </div>
    )
}

const Title = React.memo(({title}) => {
    return <p style={{ color: 'blue'}}> {title}</p>
});

ReactDOM.render(
    <Todo title ="studing react" desc="react programming"/>,
    document.getElementById('root'),
);