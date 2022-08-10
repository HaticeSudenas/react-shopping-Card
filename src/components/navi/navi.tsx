import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from '../card/card';

function Navi() {
  return (
    <>
      <h2 style={{position:"absolute",letterSpacing:"3px",fontFamily:"fantasy"}}>Alışveriş uygulaması</h2>
      <Dropdown onClick={(e)=>e.stopPropagation} style={{marginLeft:"1000px",marginTop:"30px"}}>
        <Card/>
      </Dropdown>
    </>
  );
}

export default Navi;