import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Theme from '../../../assets/theme/Theme';

function Counter() {
  const [count, setCount] = useState(0);

  const onClickDecrease = () => {
    setCount((count) => count - 1);
  };
  const onClickReset = () => {
    setCount(0);
  };
  const onClickIncrease = () => {
    setCount((count) => count + 1);
  };

  return (
    <Theme>
      <div
        className={
          'd-flex justify-content-center' +
          (count < 0 ? ' text-danger' : count > 0 ? ' text-success' : ' text-white-50')
        }
      >
        <b style={{ fontSize: '15rem' }}>{count}</b>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-light mx-3" style={{ width: '100px' }} onClick={onClickDecrease}>
          <b>
            <FontAwesomeIcon icon={faMinus} />
          </b>
        </button>
        <button className="btn btn-light mx-3" style={{ width: '100px' }} onClick={onClickReset} disabled={count === 0}>
          <b>RESET</b>
        </button>
        <button className="btn btn-light mx-3" style={{ width: '100px' }} onClick={onClickIncrease}>
          <b>
            <FontAwesomeIcon icon={faPlus} />
          </b>
        </button>
      </div>
    </Theme>
  );
}

export default Counter;
