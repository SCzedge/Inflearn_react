export default function User({ type,age,male,onChangeName,onChangeTitle}){
    function onClick1(){
        const msg = `type: ${type}, age: ${age ? age : 'unknown'}`;
        log(msg,{color:type ==='gold'?'red':'black'});
    }
    function onClick2(name,title){
        if(onChangeName){
            onChangeName(name);
        }
        onChangeTitle(title);
        male ? goMalePage() : goFemalePage();
    }
    return null;
}
function goMalePage(){}
function goFemalePage(){}