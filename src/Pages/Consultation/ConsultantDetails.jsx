import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ConsultantDetails = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
   

    const {data :consultant ={}, refetch} = useQuery({
        queryKey: ["consultant" , id],
        queryFn : async()=>{
            const res = await axiosPublic.get(`/consultant/consultant-details/${id}`)
            return res.data
        }
    
    })
    console.log(consultant)
    // const [consultantDetails, setConsultantDetails] = useState([])
    // useEffect(() => {
    //     const getData = async () => {
    //       const { data } = await axiosPublic(`/consultant/consultant-details/${id}`);
    //       setConsultantDetails(data);
    //     };
    //     getData();
    //   }, [id]);

    // console.log(consultantDetails)


    return (
        <div>
            <h1>{consultant.image}</h1>
        </div>
    );
};

export default ConsultantDetails;