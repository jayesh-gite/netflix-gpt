import { useState } from "react";
import Header from "./Header.js";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSingForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_small.jpg 959w"
          alt="Logo"
          aria-hidden="true"
          class="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0
      left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1>{isSignInForm ? "Sign-In" : "Sign-Up"}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button>
          {isSignInForm
            ? "New to Netflix? Signup"
            : "Already Regisered?Singin Now"}
        </button>
      </form>
    </div>
  );
};
export default Login;
