import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { BsFillChatRightTextFill } from 'react-icons/bs';

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 p-4" style={{ width: '208px' }}>
        <h1 className="text-xl font-bold mb-4">Acumen</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          新建对话
        </button>
        <hr className="mb-4" />
        <div>
          <div className="mb-2">
            <h2 className="text-lg">标题1</h2>
            <p className="text-sm text-gray-600">2024-04-15 19:19:04</p>
          </div>
          <hr className="mb-2" />
          <div className="mb-2">
            <h2 className="text-lg">标题2</h2>
            <p className="text-sm text-gray-600">2024-04-16 10:24:30</p>
          </div>
          <hr className="mb-2" />
          <div className="mb-2">
            <h2 className="text-lg">标题3</h2>
            <p className="text-sm text-gray-600">2024-04-17 15:45:20</p>
          </div>
          <hr className="mb-2" />
          <div className="mb-2">
            <h2 className="text-lg">标题4</h2>
            <p className="text-sm text-gray-600">2024-04-18 08:12:55</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="avatar1.png" alt="Avatar" className="h-10 w-10 rounded-full" />
              <div className="p-2 bg-gray-200 rounded-lg">
                比亚迪有几个型号
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-row-reverse">
              <img src="avatar2.png" alt="Avatar" className="h-10 w-10 rounded-full" />
              <div className="p-2 bg-blue-200 rounded-lg">
                比亚迪有3个型号
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaMicrophone className="text-2xl text-gray-600 mr-2" />
            <input type="text" placeholder="Type a message..." className="flex-1 border p-2 rounded-l-lg" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg">
              <BsFillChatRightTextFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;