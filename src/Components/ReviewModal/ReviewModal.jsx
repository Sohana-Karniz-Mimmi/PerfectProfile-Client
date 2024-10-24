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
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

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

    if (rating === 0) {
      // If rating is 0, set an error
      setError("rating", { type: "manual", message: "Rating is required" });
      return;
    }

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
      <Dialog.Panel className="relative bg-white rounded-lg p-6 z-60 shadow-lg min-w-96 mx-auto">
        <Dialog.Title className="2xl:text-4xl text-3xl font-lora tracking-wide font-extrabold text-center">
          Give Us Your
          <span className="block 2xl:text-5xl text-4xl">Feedback!</span>
        </Dialog.Title>
        {/* <Dialog.Description className="mt-2">
          We would love to hear your feedback about your experience!
        </Dialog.Description> */}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Star Rating */}
          <div className="mt-2 mb-8 text-center">
            {/* <Rating
              initialRating={rating}
              onChange={(rate) => setRating(rate)} // Allow fractional values
              emptySymbol={
                <AiOutlineStar size={24} className="text-gray-700" />
              }
              fullSymbol={<AiFillStar size={24} className="text-yellow-500" />}
              fractions={2} // Allows half-star ratings (fractions of 0.5)
            /> */}
            <Rating
              initialRating={rating}
              onChange={(rate) => {
                setRating(rate); // Update rating
                clearErrors("rating"); // Clear rating error if a rating is selected
              }}
              emptySymbol={
                <AiOutlineStar size={24} className="text-gray-700" />
              }
              fullSymbol={<AiFillStar size={24} className="text-yellow-500" />}
              fractions={2} // Allows half-star ratings (fractions of 0.5)
            />
            {errors.rating && (
              <p className="text-red-500 mt-1">{errors.rating.message}</p>
            )}
          </div>

          {/* Feedback Text Area */}
          <label className="block text-xl font-lora font-extrabold mb-1">
            Add a comment
          </label>
          <textarea
            {...register("feedback", {
              required: "Feedback is required",
              maxLength: {
                value: 250,
                message: "Feedback cannot exceed 250 characters",
              },
            })}
            className="w-full p-3 border font-montserrat rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            rows="4"
            placeholder="Write your feedback here..."
          />
          {errors.feedback && (
            <p className="text-red-500 mt-1">{errors.feedback.message}</p>
          )}

          {/* Submit Button */}
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={` px-5 py-2  text-center bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l  text-sm md:text-base font-montserrat  shadow-lg font-bold text-white `}
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ReviewModal;
