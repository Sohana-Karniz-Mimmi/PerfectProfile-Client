import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import React Hook Form
import axios from "axios";

const ReviewModal = ({ setShowModal }) => {

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm(); // Destructure from useForm
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Handle form submission
    const onSubmit = async (data) => {
      setLoading(true);
      setError(null);

      try {
        // Send the feedback to the backend
        const response = await axios.post("/api/feedback", data);

        if (response.status === 200) {
          setSuccess(true); // Show success message
          reset(); // Reset the form fields

          setTimeout(() => {
            setShowModal(); // Close the modal after success
          }, 2000);
        }
      } catch (err) {
        setError("Failed to submit feedback. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <Dialog
      open={true}
      onClose={() => {}}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-80" aria-hidden="true" />

      {/* Modal Content */}
      <Dialog.Panel className="relative bg-white rounded-lg p-6 z-60 shadow-lg max-w-md mx-auto">
        <Dialog.Title className="text-lg font-bold">
          Review Your Resume
        </Dialog.Title>
        <Dialog.Description className="mt-2">
          We would love to hear your feedback about your experience!
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Feedback Text Area */}
          <textarea
            {...register("feedback", { required: "Feedback is required" })} // Use React Hook Form register method
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="4"
            placeholder="Write your feedback here..."
          />
          {/* Validation Error Message */}
          {errors.feedback && (
            <p className="text-red-500 mt-1">{errors.feedback.message}</p>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* Success Message */}
          {success && (
            <p className="text-green-500 mt-2">
              Feedback submitted successfully!
            </p>
          )}

          {/* Submit Button */}
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white px-4 py-2 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </form>

        {/* Review Textarea */}
        {/* <div className="mt-4">
          <textarea
            className="w-full h-24 p-2 border rounded"
            placeholder="Share your thoughts..."
          ></textarea>
        </div> */}

        {/* Close Button */}
        {/* <div className="mt-4 flex justify-end">
          <button
            onClick={() => setShowModal(false)} // This button will close the modal
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Give Feedback
          </button>
        </div> */}
      </Dialog.Panel>
    </Dialog>
  );
};

export default ReviewModal;
