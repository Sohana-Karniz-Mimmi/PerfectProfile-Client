import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { axiosPublic } from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import Rating from "react-rating"; // Import the react-rating component
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // For star icons
import useAuth from "../../Hook/useAuth";

const ReviewModal = ({ showModal, handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const {user} = useAuth()

  // working
  // const onSubmit = async (data) => {
  //   setLoading(true);

  //   // Combine feedback and rating in the submission data
  //   const feedbackData = {
  //     feedback: data.feedback,
  //     rating: Number(rating),
  //     email: user?.email,
  //     name: user?.displayName,
  //     photo: user?.photoURL,
  //   };

  //   try {
  //     // Send POST request to the /feedback API using axiosPublic
  //     await axiosPublic.post("/feedback", feedbackData);

  //     // If successful, show success message
  //     toast.success("Feedback submitted successfully!");
  //     reset(); // Reset form fields
  //     setRating(0); // Reset the rating
  //     handleCloseModal()
  //   } catch (err) {
  //     // Handle errors
  //     toast.error(err.response?.data?.message || "Failed to submit feedback.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const onSubmit = async (data) => {
    setLoading(true);

    // Check if the user is logged in
    if (!user) {
      toast.error("You must be logged in to submit feedback.");
      setLoading(false); // Reset loading state
      return; // Exit early
    }

    // Combine feedback and rating in the submission data
    const feedbackData = {
      feedback: data.feedback,
      rating: Number(rating),
      email: user?.email, // Directly access email since user is defined
      name: user?.displayName,
      photo: user?.photoURL,
    };

    try {
      // Send POST request to the /feedback API using axiosPublic
      const response = await axiosPublic.post("/feedback", feedbackData);

      // If successful, show success message
      toast.success(
        response.data.message || "Feedback submitted successfully!"
      );
      reset(); // Reset form fields
      setRating(0); // Reset the rating
      handleCloseModal();
    } catch (err) {
      // Handle errors
      toast.error(err.response?.data?.message || "Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <Dialog
      open={showModal}
      onClose={handleCloseModal}
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
      </Dialog.Panel>
    </Dialog>
  );
};

export default ReviewModal;
