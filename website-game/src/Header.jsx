import Difficulty from './difficulty.jsx'
import Start from './Start.jsx'
function Header(){
    return(
        <div id='box'>
        <header>
<h1 id='name'>Math Quiz</h1>
<Start/>
<hr />
</header>
<Difficulty/>
</div>
    );
    
}
export default Header