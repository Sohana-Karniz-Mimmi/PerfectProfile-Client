import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
} from "../../../store/Features/user/userSlice";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);

  const [page, setPage] = useState(1);
  const limit = 10; // You can change this as per your need

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch, page]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs ">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>User ID</th>
              <th>Email</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td className="py-5">{user.name}</td>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>Canada</td>
              </tr>
            ))}
            {/* <tr>
              <th>2</th>
              <td className="p-5">Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
            </tr>
            <tr>
              <th>3</th>
              <td className="p-5">Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
            </tr>
            <tr>
              <th>4</th>
              <td className="p-5">Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
            </tr>
            <tr>
              <th>5</th>
              <td className="p-5">Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
            </tr>
            <tr>
              <th>6</th>
              <td className="p-5">Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
            </tr>
            <tr>
              <th>7</th>
              <td className="p-5">Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Schuster-Schimmel</td>
              <td>Philippines</td>
            </tr>
            <tr>
              <th>8</th>
              <td className="p-5">Sammy Seston</td>
              <td>Accountant I</td>
              <td>O'Hara, Welch and Keebler</td>
              <td>Indonesia</td>
            </tr>
            <tr>
              <th>9</th>
              <td className="p-5">Lesya Tinham</td>
              <td>Safety Technician IV</td>
              <td>Turner-Kuhlman</td>
              <td>Philippines</td>
            </tr>
            <tr>
              <th>10</th>
              <td className="p-5">Zaneta Tewkesbury</td>
              <td>VP Marketing</td>
              <td>Sauer LLC</td>
              <td>Chad</td>
            </tr>
            <tr>
              <th>11</th>
              <td className="p-5">Andy Tipple</td>
              <td>Librarian</td>
              <td>Hilpert Group</td>
              <td>Poland</td>
            </tr>
            <tr>
              <th>12</th>
              <td className="p-5">Sophi Biles</td>
              <td>Recruiting Manager</td>
              <td>Gutmann Inc</td>
              <td>Indonesia</td>
            </tr>
            <tr>
              <th>13</th>
              <td className="p-5">Florida Garces</td>
              <td>Web Developer IV</td>
              <td>Gaylord, Pacocha and Baumbach</td>
              <td>Poland</td>
            </tr>
            <tr>
              <th>14</th>
              <td className="p-5">Maribeth Popping</td>
              <td>Analyst Programmer</td>
              <td>Deckow-Pouros</td>
              <td>Portugal</td>
            </tr>
            <tr>
              <th>15</th>
              <td className="p-5">Moritz Dryburgh</td>
              <td>Dental Hygienist</td>
              <td>Schiller, Cole and Hackett</td>
              <td>Sri Lanka</td>
            </tr>
            <tr>
              <th>16</th>
              <td className="p-5">Reid Semiras</td>
              <td>Teacher</td>
              <td>Sporer, Sipes and Rogahn</td>
              <td>Poland</td>
            </tr>
            <tr>
              <th>17</th>
              <td className="p-5">Alec Lethby</td>
              <td>Teacher</td>
              <td>Reichel, Glover and Hamill</td>
              <td>China</td>
            </tr>
            <tr>
              <th>18</th>
              <td className="p-5">Aland Wilber</td>
              <td>Quality Control Specialist</td>
              <td>Kshlerin, Rogahn and Swaniawski</td>
              <td>Czech Republic</td>
            </tr>
            <tr>
              <th>19</th>
              <td className="p-5">Teddie Duerden</td>
              <td>Staff Accountant III</td>
              <td>Pouros, Ullrich and Windler</td>
              <td>France</td>
            </tr>
            <tr>
              <th>20</th>
              <td className="p-5">Lorelei Blackstone</td>
              <td>Data Coordiator</td>
              <td>Witting, Kutch and Greenfelder</td>
              <td>Kazakhstan</td>
            </tr> */}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-16">
          <div className="flex gap-5">
            <button
              className="btn bg-primary text-white px-6 hover:bg-secondary"
              onClick={handlePrevious}
            >
              {" "}
              <FaArrowLeft />{" "}
            </button>
            <p>
              {" "}
              {currentPage} of {totalPages}{" "}
            </p>
            <button
              className="btn bg-primary text-white px-6 hover:bg-secondary"
              onClick={handleNext}
            >
              {" "}
              <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
