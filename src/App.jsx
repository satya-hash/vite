import { useState } from "react";
import "./App.css";

const App = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!dateOfBirth) {
      setMessage("Please enter your date of birth");
      return;
    }
    const BOD = new Date(dateOfBirth);
    const bmonth = BOD.getMonth(),
      byear = BOD.getFullYear(),
      btime = BOD.getTime();

    const today = new Date();
    const month = today.getMonth(),
      year = today.getFullYear(),
      time = today.getTime();

    if (byear > year) {
      setMessage(`Invalid Date of Birth`);
      return;
    }

    let y = year - byear;
    let m = month - bmonth;
    let time_diff = time - btime;
    let day_diff = time_diff / (1000 * 3600 * 24);
    if (m <= 0) {
      if (y === 0) {
        y = 0;
      } else {
        y = y - 1;
        m = 12 + m;
      }
    }

    m = y * 12 + m;

    setMessage(`${y} years  ${m} months  ${Math.round(day_diff)} days`);
  };

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center bg-slate-200 flex-col ">
        <form
          action=""
          className=" rounded-md bg-white shadow-md p-5 flex flex-col gap-2 flex-wrap mx-3 "
          onSubmit={handleSubmit}
        >
          <input
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            className="border-slate-500 border-2 rounded-lg  h-14 uppercase px-2 font-bold text-[#333333] "
            value={dateOfBirth}
            name="dd"
            placeholder="DD"
          />

          <button
            type="submit"
            className="font-bold py-2 w-32 ml-auto rounded-sm hover:bg-[#ff9a28] bg-[#ff7a28] text-white"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
        {message && <p className="mt-4"> {message} </p>}
      </main>
    </>
  );
};

export default App;
