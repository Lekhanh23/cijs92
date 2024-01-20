
import './App.css';
import Button from './assets/Button';


function App() {
  return (
    <div>
      
      <div className='main-1'>
         <Button text='Button 1'/>
         <Button text='Button 2'/>
         <Button text='Button 3'/>
         
      </div>
      <div className='main-2'>
        <Button text= 'Button 1' backgroundColor='blue'/>
        <Button text='Button 2' backgroundColor='green'/>
        <Button text='Button 3' backgroundColor='orange'/>
        <Button text='Button 4' backgroundColor='red'/>
      </div>
      <div className='main-3'>
        <Button text='Button 1' backgroundColor='grey'/>
        <Button text='Button 2' color= 'green' backgroundColor='white' />
        <Button text='Button 3' color='blue' backgroundColor='white'  />
      </div>
      </div> 
    
  
  )
  
  
}
export default App;
