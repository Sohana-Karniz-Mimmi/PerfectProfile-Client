import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
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
        toast.success("Successfully SignIn");
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
      toast.success("Successfully SignIn with Social Account");
      if (result.user) {
        navigate(from, { replace: true });
      }
    });
  };
  return (
    <div>
      <div
        className=" flex items-center min-h-screen"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Helmet>
          <title>SignIn | Perfect Profile</title>
        </Helmet>
        <Container>
          <div className="md:flex w-full p-5 items-center gap-5">
            <div className="md:w-1/2 text-white ">
              <h1 className="text-5xl font-bold my-4 text-center">
                My Cv/Resume Creator
              </h1>
              <p>
                Make a Cv/Resume to define yourself The right away. Meet
                thousands of job announcements and employers by the help of your
                profile with a private extension, which you can share at all
                social media environments
              </p>
              <div className="text-center">
                <Link to="/signUp">
                  <button className="btn bg-blue-400 hover:bg-blue-500 my-4 text-white">
                    SignUp
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSignIn} className="card-body shadow-xl ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
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
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 hover:bg-blue-500 text-white">
                    SignIn
                  </button>
                </div>
                <div className="mt-5 text-white">
                  <h1>
                    Don't have an account?{" "}
                    <Link
                      className="text-teal-100  text-center font-bold"
                      to="/signUp"
                    >
                      SignUp
                    </Link>{" "}
                  </h1>
                </div>
                <hr className="my-5" />
                <h2 className="text-white text-center">Or SignIn With</h2>
              </form>
              <div className=" flex justify-center  p-2 rounded-md w-full">
                <button
                  className="flex border w-full px-5  mx-28 items-center gap-5 py-3 justify-center hover:bg-blue-400"
                  onClick={() => handleSocialSignIn(googleSignIn)}
                >
                  <FcGoogle className="text-3xl" />{" "}
                  <p className="text-white">Continue With Google</p>
                </button>
              </div>
            </div>
          </div>
        </Container>
        <Toaster />
      </div>
    </div>
  );
};

export default SignIn;
