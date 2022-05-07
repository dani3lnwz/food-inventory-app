import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
   return (
     <div>
       <h2>This is manage inventory</h2>
       <Link to="/addfood" className="btn bg-purple-500 text-white hover:bg-purple-700 p-2 px-4 rounded-full">
         Add New Item
       </Link>
     </div>
   );
};

export default ManageInventory;