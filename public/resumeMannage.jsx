import { useEffect, useState } from 'react';
import { FaStar, FaEdit, FaTimes, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const ManageResume = () => {
    const axiosPublic = useAxiosPublic();
    const [templates, setTemplate] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosPublic(`/predefined-templates`);
            setTemplate(data);
        };
        getData();
    }, []);

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setSelectedCount(selectedCount + 1);
            setShowModal(true);
        } else {
            setSelectedCount(selectedCount - 1);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-8">Recent Designs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates?.map(template => (
                    <div key={template._id} className="relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform h-[300px] overflow-hidden"
                        style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                        <div>
                            <img src={template.image} alt={template.name} className="object-cover mb-2 rounded h-[250px]" />
                        </div>
                        <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
                            <input
                                type="checkbox"
                                className="form-checkbox text-black bg-white p-2 rounded-xl border-gray-300 focus:ring-offset-2 w-6 h-6"
                                onChange={handleCheckboxChange}
                            />
                            <div className="flex space-x-2">
                                <button className="text-black hover:text-yellow-500 bg-white p-2 rounded-xl">
                                    <FaStar size={20} />
                                </button>
                                <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
                                    <FaEdit size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-end justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">{selectedCount} Selected</h2>
                            <button onClick={closeModal} className="text-red-500">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="text-red-500 flex items-center space-x-1">
                                <FaTrash size={20} />
                                <span>Remove</span>
                            </button>
                            <button onClick={closeModal} className="bg-gray-300 p-2 rounded-md">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageResume;
