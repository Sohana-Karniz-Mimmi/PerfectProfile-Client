import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'
const ShareLinkCopyModal = ({ closeModal, isOpen, copyToClipboard, copied, shareLink }) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 py-14 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center text-gray-900'
                                >
                                    <input
                                        type="text"
                                        value={shareLink}
                                        readOnly
                                        className="w-full p-2 border rounded-md bg-gray-50"
                                    />
                                </DialogTitle>
                                <div className='flex mt-4 gap-4'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={copyToClipboard}
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                    >
                                        {copied ? "Copied!" : "Copy Link"}
                                    </button>

                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        Download Pdf
                                    </button>

                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

ShareLinkCopyModal.propTypes = {
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
    handleRoleChange: PropTypes.func,
}

export default ShareLinkCopyModal
