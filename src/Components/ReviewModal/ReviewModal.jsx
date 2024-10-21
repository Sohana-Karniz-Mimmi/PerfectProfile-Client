import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import React Hook Form
import axios from "axios";
import toast from "react-hot-toast";
import Rating from "react-rating"; // Import the react-rating component
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // For star icons
import useAuth from "../../Hook/useAuth";

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
  const [rating, setRating] = useState(0); // State for storing the rating
  const {user} = useAuth();

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/feedback", {
        feedback: data.feedback,
        rating: Number(rating),
        user_email: user?.email, // Ensure the rating is a number (including fractions)
        name: user?.displayName,
        photo: user?.photoURL,
      });

      if (response.status === 201) {
        toast.success("Feedback submitted successfully!");
        reset();
        setRating(0); // Reset the rating
        setShowModal(false);
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
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
            {...register("feedback", {
              required: "Feedback is required",
            })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="4"
            placeholder="Write your feedback here..."
          />
          {errors.feedback && (
            <p className="text-red-500 mt-1">{errors.feedback.message}</p>
          )}

          {/* Star Rating */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">
              Rate our service:
            </label>
            <Rating
              initialRating={rating}
              onChange={(rate) => setRating(rate)} // Allow fractional values
              emptySymbol={
                <AiOutlineStar size={24} className="text-gray-400" />
              }
              fullSymbol={<AiFillStar size={24} className="text-yellow-500" />}
              fractions={2} // Allows half-star ratings (fractions of 0.5)
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 mt-2">{success}</p>}

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
