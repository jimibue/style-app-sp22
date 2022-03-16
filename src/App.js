// import './App.css';
import Comp1 from './Comp1';
import Header from './Header';
import Badge from './styledDemo/Badge';
import Button from './styledDemo/Button';
import Container from './styledDemo/Container';
import { PRIMARY_COLOR } from './styles';

function App() {
  return (
    <div className='container' style={{border:`5px solid ${PRIMARY_COLOR}`}}>
       {/* <h1>H1 in App</h1>
       <h1 style={{color:'black'}}>H1 in comp 1</h1>
       <Comp1 />
       <h3>INLINE COMPS</h3>
       <Header text='Header as h1'/>
       <Header text='Second Header as h1'/>
       <Header text='Header as h2' as='h2'/> */}
       <h1>Styled components Section</h1>
       <Container>
        <Badge> badge here</Badge>
        <Badge rounded> rounded badge here</Badge>
        <Badge secondary> secondary badge here</Badge>
        <Badge success> success badge here</Badge>
       </Container>
       <Button> Button here</Button>
       <Button outline>Outline Button here</Button>
    </div>
  );
}

export default App;


