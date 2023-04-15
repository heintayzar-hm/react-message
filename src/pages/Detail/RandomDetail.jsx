import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessageThunk } from '../../store/messageSlice/messageSlice';

const RandomDetail = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.message);

  useEffect(() => {
    dispatch(getRandomMessageThunk());
  }, [dispatch, message]);

  return (
    <div>
      <h1 className="text-lg font-bold py-5 text-center"><span>Hello My Greetings</span></h1>

      <div className="text-center py-3">This is a random greeting</div>

      <div className="flex justify-evenly items-center">
        <span>Header:</span>
        <div className="text-center text-xl font-bold py-3">
          {message?.header}
        </div>
      </div>

      <div className="flex justify-evenly items-center">
        <span>Content:</span>
        <div className="text-center text-xl font-bold py-3">
          {message?.content}
        </div>
      </div>

    </div>
  );
};

export default RandomDetail;
