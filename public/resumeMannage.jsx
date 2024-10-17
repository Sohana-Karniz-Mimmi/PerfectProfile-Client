// import { useEffect, useState } from 'react';
// import { FaStar, FaEdit, FaTimes, FaTrash } from 'react-icons/fa';
// import useAxiosPublic from '../../Hook/useAxiosPublic';

// const ManageResume = () => {
//     const axiosPublic = useAxiosPublic();
//     const [templates, setTemplate] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCount, setSelectedCount] = useState(0);

//     useEffect(() => {
//         const getData = async () => {
//             const { data } = await axiosPublic(`/predefined-templates`);
//             setTemplate(data);
//         };
//         getData();
//     }, []);

//     const handleCheckboxChange = (e) => {
//         if (e.target.checked) {
//             setSelectedCount(selectedCount + 1);
//             setShowModal(true);
//         } else {
//             setSelectedCount(selectedCount - 1);
//         }
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-3xl font-bold mb-8">Recent Designs</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {templates?.map(template => (
//                     <div key={template._id} className="relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform h-[300px] overflow-hidden"
//                         style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
//                         <div>
//                             <img src={template.image} alt={template.name} className="object-cover mb-2 rounded h-[250px]" />
//                         </div>
//                         <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
//                             <input
//                                 type="checkbox"
//                                 className="form-checkbox text-black bg-white p-2 rounded-xl border-gray-300 focus:ring-offset-2 w-6 h-6"
//                                 onChange={handleCheckboxChange}
//                             />
//                             <div className="flex space-x-2">
//                                 <button className="text-black hover:text-yellow-500 bg-white p-2 rounded-xl">
//                                     <FaStar size={20} />
//                                 </button>
//                                 <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
//                                     <FaEdit size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 flex items-end justify-center z-50">
//                     <div className="bg-white p-5 rounded-lg shadow-lg w-80">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-lg font-semibold">{selectedCount} Selected</h2>
//                             <button onClick={closeModal} className="text-red-500">
//                                 <FaTimes size={20} />
//                             </button>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <button className="text-red-500 flex items-center space-x-1">
//                                 <FaTrash size={20} />
//                                 <span>Remove</span>
//                             </button>
//                             <button onClick={closeModal} className="bg-gray-300 p-2 rounded-md">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManageResume;


import { useEffect, useState } from 'react';
import { FaStar, } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { LiaTimesSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import useAuth from '../../Hook/useAuth';
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';

const ManageResume = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()
    const [templates, setTemplate] = useState([]);
    const [myResumeTemplates, setMyResumeTemplate] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await axiosPublic(`/my-resume/${user?.email}`);
    //         setTemplate(data);
    //     };
    //     getData();
    // }, []);


    const fetchWishlists = async () => {
        if (user?.email) {
            const { data } = await axiosPublic(`/my-resume/${user?.email}`);
            setTemplate(data);
        }
    };

    useEffect(() => {
        fetchWishlists();
    }, [user?.email]);


    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosPublic.delete(`/my-resume/${id}`)
            return data
        },
        onSuccess: async data => {
            console.log(data)
            // refetch()
            await fetchWishlists();
            toast.success('Successfully deleted.')
        },
    })

    //  Handle Delete
    const handleDelete = async id => {
        console.log(id)
        try {
            await mutateAsync(id)
        } catch (err) {
            console.log(err)
        }
    }


    const handleCheckboxChange = (e, templateId) => {
        if (e.target.checked) {
            setMyResumeTemplate([...myResumeTemplates, templateId]);
        } else {
            setMyResumeTemplate(myResumeTemplates.filter(id => id !== templateId));
        }
    };

    const closeSelectedModal = () => {
        setMyResumeTemplate([]);
    };

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    // const handleDelete = (id) => {
    //     console.log(id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 axiosPublic.delete(`/my-resume/${id}`)
    //                     .then((response) => {
    //                         console.log(response.data);
    //                         if (response.data.deletedCount > 0) {
    //                             closeModal()
    //                             Swal.fire({
    //                                 title: "Deleted!",
    //                                 text: "Your file has been deleted.",
    //                                 icon: "success"
    //                             });

    //                         }
    //                     })
    //                     .catch((error) => {
    //                         console.error("There was an error deleting the resume", error);
    //                         Swal.fire({
    //                             title: "Error!",
    //                             text: "There was an error deleting the resume.",
    //                             icon: "error"
    //                         });
    //                     });
    //             }
    //         });
    // };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-8">Recent Designs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates?.map(template => (
                    <div key={template._id} className={`relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform h-[300px] overflow-hidden ${myResumeTemplates.includes(template._id) ? 'border-2 border-blue-500' : ''}`}
                        style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                        <div>
                            <img src={template.image} alt={template.name} className="object-cover mb-2 rounded h-[250px]" />
                        </div>
                        <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
                            <input
                                type="checkbox"
                                className="form-checkbox text-black bg-white border-gray-300 focus:ring-offset-2 w-6 h-6"
                                onChange={(e) => handleCheckboxChange(e, template._id)}
                                checked={myResumeTemplates.includes(template._id)}
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
            {myResumeTemplates.length > 0 && (
                <div className="fixed inset-0  flex items-end mb-10 justify-center z-50">
                    <div className="bg-white p-5 rounded-2xl shadow-lg w-[650px]"
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                        }}

                    >
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">{myResumeTemplates.length} Selected</h2>

                            </div>

                            <button
                                className=" flex items-center space-x-1">
                                <RiDeleteBinLine
                                    onClick={() => setIsOpen(true)}
                                    className='hover:text-red-500' size={25} />
                            </button>
                            {/* Delete modal */}
                            <DeleteModal
                                isOpen={isOpen}
                                closeSelectedModal={closeSelectedModal}
                                closeModal={closeModal}
                                handleDelete={handleDelete}
                                id={myResumeTemplates[0]}
                            />
                            <button onClick={closeSelectedModal} className="">
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

