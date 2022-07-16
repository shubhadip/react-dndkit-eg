import GridEg from './../components/gridEg/index';
import HorizontalEg from './../components/horizontalEg/index';
import './../styles/App.css';
import GridSwap from './gridSwapEg';

function App() {
  return (
    <div className={['App'].join(' ')}>
      <div className='appContainer'>
        <div>
          <p>Nested array of object</p>
          <HorizontalEg />
        </div>
        
        <div className='grid-egs'>
          <div>
            <p className='label-text'>Basic Grid with Drag Handle</p>
            <GridEg />
          </div>
          <div style={{marginTop: '48px'}}>
            <p  className='label-text'>Grid Swap with Activation Constraint</p>
            <GridSwap />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
