import GridEg from './../components/gridEg/index';
import HorizontalEg from './../components/horizontalEg/index';
import './../styles/App.css';
import GridSwap from './gridSwapEg';

function App() {
  return (
    <div className={['App'].join(' ')}>
      <div className='appContainer'>
        <HorizontalEg />
        <div className='grid-egs'>
          <div>
            <p className='label-text'>Basic Grid</p>
            <GridEg />
          </div>
          <div>
            <p  className='label-text'>Grid Swap</p>
            <GridSwap />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
