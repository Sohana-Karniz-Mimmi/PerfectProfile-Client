import { useEffect, useState } from 'react';
import { FaStar, } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { LiaTimesSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";

const ManageResume = () => {
    const axiosPublic = useAxiosPublic();
    const [templates, setTemplate] = useState([]);
    const [selectedTemplates, setSelectedTemplates] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosPublic(`/predefined-templates`);
            setTemplate(data);
        };
        getData();
    }, []);

    const handleCheckboxChange = (e, templateId) => {
        if (e.target.checked) {
            setSelectedTemplates([...selectedTemplates, templateId]);
        } else {
            setSelectedTemplates(selectedTemplates.filter(id => id !== templateId));
        }
    };

    const closeModal = () => {
        setSelectedTemplates([]);
    };

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://tourism-server-beta.vercel.app/tourists/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                                const remaining = touristList.filter(touristEmail => touristEmail._id !== id)
                                setTouristList(remaining);
                            }
                        })
                }
            })

    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-8">Recent Designs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates?.map(template => (
                    <div key={template._id} className={`relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform h-[300px] overflow-hidden ${selectedTemplates.includes(template._id) ? 'border-2 border-blue-500' : ''}`}
                        style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                        <div>
                            <img src={template.image} alt={template.name} className="object-cover mb-2 rounded h-[250px]" />
                        </div>
                        <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
                            <input
                                type="checkbox"
                                className="form-checkbox text-black bg-white border-gray-300 focus:ring-offset-2 w-6 h-6"
                                onChange={(e) => handleCheckboxChange(e, template._id)}
                                checked={selectedTemplates.includes(template._id)}
                            />
                            <div className="flex space-x-2">
                                <button className="text-black hover:text-yellow-500 bg-white p-2 rounded-xl">
                                    <FaStar size={20} />
                                </button>
                                <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
                                    <FiEdit size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedTemplates.length > 0 && (
                <div className="fixed inset-0  flex items-end mb-10 justify-center z-50">
                    <div className="bg-white p-5 rounded-2xl shadow-lg w-[650px]"
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                        }}

                    >
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">{selectedTemplates.length} Selected</h2>

                            </div>

                            <button className=" flex items-center space-x-1">
                                <RiDeleteBinLine className='hover:text-red-500' size={25} />
                            </button>
                            <button onClick={closeModal} className="">
                                <LiaTimesSolid className='hover:text-red-500' size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageResume;
