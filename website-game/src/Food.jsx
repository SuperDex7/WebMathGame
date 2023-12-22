function Food(){
const easy = 'Easy';
const medium = 'Medium';
const hard = 'Hard';
const harr = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHg0bnhjZjZqYWJsYTR4cjhjNXZqZ2dob2cxb3owazQxdDVhM3pweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5K7ngCtszoxxbaBieC/giphy.gif"

let count = 0;
let bruh;

function difficulty(){
    count++;
    alert(count);
    
}

    

    return(
    <div>
        {(() => {
            switch(count){
    case 0:
bruh = easy;
//return <button onClick={difficulty}>{easy}</button>;
break;
case 1:
    bruh = medium;
    //return <button onClick={difficulty}>{medium}</button>;
    break;
    case 2:
        bruh = hard;
        //return <button onClick={difficulty}>{easy}</button>;
        break;
        case 3:
            count = 0;
            break;
            default: 
            count = 0;
}

})()}
        
        
        <button onClick={difficulty}>{bruh}</button>
    </div>
    
);

}



export default Food