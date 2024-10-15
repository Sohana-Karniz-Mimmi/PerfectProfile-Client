import React from 'react';
import { Link } from 'react-router-dom';

const PremiumModal = () => {

  return (
    <dialog id="premium-modal" className="modal">
      <form method="dialog" className="modal-box">
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className='bg-white p-6 rounded-md'>
            <h2 className="font-bold text-lg">Premium Access Required</h2>
            <p className="mt-2">To use this template, you need to purchase the premium package.</p>
            <div className="modal-action mt-4 flex justify-end">
              <button className="btn bg-gray-300 text-black py-2 px-4 rounded mr-2" onClick={() => document.getElementById("premium-modal").close()}>Cancel</button>
              <Link to={'/pricing'}>
                <button className="bg-primary text-white py-2 px-4 rounded"
                >
                  Purchase Package
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default PremiumModal;
