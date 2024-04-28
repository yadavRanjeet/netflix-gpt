import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO_URL, P_logo } from "../utils/Constant";

const Header = () => {
  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    
  };
  useEffect(() => {
    
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={P_logo} alt="usericon" />
          <button onClick={handleSignOut} className="text-red-500 inline-flex">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
