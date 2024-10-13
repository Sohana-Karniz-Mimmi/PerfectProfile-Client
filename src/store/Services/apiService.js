import useAxiosPublic from "../../Hook/useAxiosPublic";

const axiosPublic = useAxiosPublic()

export const getUsers = async (
  page = 1,
  size = 10,
  filter = "",
  search = ""
) => {
  try {
    const response = await axiosPublic.get(
      `/users?page=${page}&size=${size}&filter=${filter}&search=${search}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getPredefinedTemplates = async () => {
  try {
    const response = await axiosPublic.get("/predefined-templates");
    return response.data;
  } catch (error) {
    console.error("Error fetching predefined templates:", error);
    throw error;
  }
};

