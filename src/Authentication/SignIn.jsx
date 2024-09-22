import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import bg from "../assets/templateBg.webp";

const SignIn = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        toast.success("Successfully Signed In");
        if (result.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error("SignIn Error:", error);
        toast.error("Failed to SignIn. Please Check your Credentials.");
      });
  };

  const handleSocialSignIn = (socialProvider) => {
    socialProvider().then((result) => {
      toast.success("Successfully Signed In with Social Account");
      if (result.user) {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div
      className="flex items-center min-h-screen"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Helmet>
        <title>Login | Perfect Profile</title>
      </Helmet>
      <Container>
        <div className="md:flex w-full p-5 gap-5 items-center">
          {/* Left Section */}
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold my-4 text-center">
              My Cv/Resume Creator
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Make a Cv/Resume to define yourself the right way. Meet thousands
              of job announcements and employers with the help of your profile,
              which you can share on all social media platforms.
            </p>
            <div className="text-center">
              <Link to="/signUp">
                <button className="btn bg-primary hover:bg-blue-500 my-4 text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <form
              onSubmit={handleSignIn}
              className="card-body shadow-xl  p-6 rounded-lg"
            >
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-primary hover:bg-blue-500 text-white w-full">
                  Login
                </button>
              </div>
              <div className="mt-5 text-center text-white">
                <h1>
                  Don't have an account?{" "}
                  <Link className="text-blue-500 font-bold" to="/signUp">
                    Register
                  </Link>
                </h1>
              </div>
              <hr className="my-5" />
              <h2 className="text-center text-white">Or SignIn With</h2>
            </form>

            {/* Social SignIn */}
            <div className="flex justify-center mt-5">
              <button
                className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:bg-primary hover:text-white transition w-full md:w-auto"
                onClick={() => handleSocialSignIn(googleSignIn)}
              >
                <FcGoogle className="text-2xl" />
                <p className="text-center text-white">Continue With Google</p>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default SignIn;
