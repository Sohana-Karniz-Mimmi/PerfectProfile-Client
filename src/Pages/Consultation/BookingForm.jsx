import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const BookingForm = () => {
  const {consultantId} = useParams()
  const axiosPublic = useAxiosPublic()
  const { data: consultant =[], isLoading, error } = useQuery(
    ['consultant', consultantId],
    async () => {
      const response = await axiosPublic.get(`/user/${user?._id}`);
      return response.data;
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading consultant data</p>;

    return (
        <div>
           <h1>{consultant.name}</h1>
          
        </div>
    );
};

export default BookingForm;