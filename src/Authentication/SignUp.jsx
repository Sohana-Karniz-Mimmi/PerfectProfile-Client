import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const handleSignUp = (e) => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password.length < 6) {
      toast.error("Please Should be at least 6 characters long..!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6}/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and on lowercase letter.."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {});
        toast.success("Successfully SignUp");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error SignUp User:", error);
        toast.error("SignUp Failed");
      });
  };
  return (
    <div>
      <Helmet>
        <title>SignUp | Perfect Profile</title>
      </Helmet>
      <Container>
        <div className="md:flex w-full p-5 bg-cyan-600 items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl font-bold text-center my-5">
              My Cv/Resume Creator
            </h1>
            <p>
              Make a Cv/Resume to define yourself The right away. Meet thousands
              of job announcements and employers by the help of your profile
              with a private extension, which you can share at all social media
              environments
            </p>
            <div className="text-center">
              <Link to="/signIn">
                <button className="btn bg-blue-400 hover:bg-blue-500 my-4">
                  SignIn
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSignUp} className="card-body  shadow-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-info w-full "
                  name="photo"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="flex gap-2 mt-4">
                <input type="checkbox" />
                <p>Terms & Condition</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400 hover:bg-blue-500">
                  SignUp
                </button>
              </div>
              <div>
                <h1>
                  Already have an account?{" "}
                  <Link
                    className="text-teal-100  text-center font-bold"
                    to="/signIn"
                  >
                    SignIn
                  </Link>{" "}
                </h1>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default SignUp;
