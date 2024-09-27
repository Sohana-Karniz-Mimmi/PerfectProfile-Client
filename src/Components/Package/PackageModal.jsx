// import {Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import Payment from '../Payment/Payment';

// const PackageModal = ({isOpen, setIsOpen}) => {
//     return (
//         <div>
//               <button onClick={() => setIsOpen(true)} className="relative inline-block text-lg group">
//                 <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2CACD5] transition-colors duration-300 ease-out border-2 border-[#2CACD5] rounded-lg group-hover:text-white">
//                   <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                   <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2CACD5] group-hover:-rotate-180 ease"></span>
//                   <span className="relative">Get Started</span>
//                 </span>
//                 <span
//                   className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2CACD5] rounded-lg group-hover:mb-0 group-hover:mr-0"
//                   data-rounded="rounded-lg"
//                 ></span>
//               </button>

//               <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//           <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
//             <DialogTitle className="font-bold">Your Payment details</DialogTitle>
//             <Description>
//                 <div>
//                     <h1>Your order summery</h1>
//                    <div className='flex justify-between items-center'>
//                    <p>Standard Monthly Pack</p>
//                    <p>$9.99</p>
//                    </div>
//                 </div>
//             </Description>
//             <div>
//             <Payment></Payment>
//             </div>
//             <div className="flex gap-4">
//               <button onClick={() => setIsOpen(false)}>Cancel</button>
//               <button onClick={() => setIsOpen(false)}>Deactivate</button>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

//         </div>
//     );
// };

// export default PackageModal;