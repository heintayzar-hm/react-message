import React, { useEffect } from "react";
import { deleteMessageThunk, getMessagesThunk } from "../../store/messageSlice/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages.messages);
    useEffect(() => {
        dispatch(getMessagesThunk());
    }, []);
    const deleteMessage = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        dispatch(deleteMessageThunk(e.target.id)).then(() => dispatch(getMessagesThunk()));
    }
    return (
        <div>
            <h1 className="text-lg font-bold py-5 text-center"><span>Hello My Greetings</span></h1>
            <div className="flex justify-between py-3">
            <button type="button" className="bg-blue-500 relative hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/new-greeting">New Greeting</Link>
                </button>
                <button type="button" className="bg-blue-500 relative hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/random-detail">Get A Random Greeting</Link>
                </button>
            </div>
        <div className="relative overflow-x-auto">

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Header</th>
                        <th scope="col" className="px-6 py-3">Content</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {messages.map((message) => (
                    <tr key={message.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <Link to = {`/detail/${message.id}`}>{message.header}</Link>
                        </th>
                        <td className="px-6 py-4">
                            <Link to = {`/detail/${message.id}`}>{message.content}</Link>
                        </td>
                        <td className="px-6 py-4 flex flex-row gap-3">
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to={`/update-greeting/${message.id}`}>Update</Link>
                            </button>
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id={`${message.id}`} onClick={deleteMessage}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
            </div>
    );
};

export default Home;
