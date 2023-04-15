import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import FormInput from '../../components/FormInput';
import SmallErrorMessage from '../../components/SmallErrorMessage';
import { createMessageThunk } from '../../store/messageSlice/messageSlice';

const createGreetingSchema = Yup.object().shape({
  header: Yup.string().required('Header is required').min(3, 'Header must be at least 3 characters').max(50, 'Header must be less than 50 characters'),
  content: Yup.string().required('Content is required').min(3, 'Content must be at least 3 characters').max(500, 'Content must be less than 500 characters'),
});

const NewGreeting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const greetingData = {
    header: '',
    content: '',
  };
  const [greeting, setGreeting] = useState(greetingData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGreeting((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    createGreetingSchema.validate(greeting, { abortEarly: false }).then(() => {
      dispatch(createMessageThunk(greeting)).then(() => {
        navigate('/');
      }).catch((err) => {
        setErrors(err);
      });
    }).catch((err) => {
      const errors = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(errors);
    });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <h1 className="flex font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Hi Welcome to my greetings
        </h1>
        <div className=" bg-white rounded-lg shadow dark:border md:mt-0 px-[10%] md:px-[25%] dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create New Greeting
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
              <div className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                <FormInput
                  htmlFor="header"
                  spanText="Greeting&apos;s header"
                  type="text"
                  id="header"
                  name="header"
                  placeholder="Enter Greeting's header"
                  value={greeting.header}
                  handleChange={handleChange}
                  autoComplete="header"
                  validateError={errors.header}
                />

              </div>

              <div>
                <span htmlFor="Content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Greeting Text</span>
                <textarea
                  id="content"
                  name="content"
                  placeholder="Greeting's content"
                  value={greeting.content}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="content"
                  rows="17"
                />
                {errors.content && <SmallErrorMessage message={errors.content} />}
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                Create Greeting
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" viewBox="0 0 20 20" fill="currentColor" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGreeting;
