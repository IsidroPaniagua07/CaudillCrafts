import { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [username, setUsername] = useState("tasinxx");
  const [email, setEmail] = useState("tasinx@gmail.comzz");
  const [password, setPassword] = useState("admin");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }).then((r) => r.json());
      console.log(res);;

      router.push("/");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col h-3/4 w-1/3 rounded-md border border-black bg-slate-200 justify-center items-center">
          <h3 className="flex h-1/5 w-full text-5xl font-RobotoMono justify-center items-center">
            Sign Up
          </h3>
          <form
            onSubmit={handleSignUp}
            className="flex h-4/5 w-full flex-col justify-center items-center gap-2"
          >
            <p className="flex flex-col text-2xl">
              Username:
              <input
                type="name"
                className="border-slate-400 border"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </p>
            <p className="flex flex-col text-2xl">
              Email:
              <input
                type="email"
                className="border-slate-400 border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p className="flex flex-col text-2xl">
              Password:
              <input
                type="password"
                className="border-slate-400 border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <button
              onClick={() => {}}
              className="border border-black text-2xl rounded-sm bg-slate-500 text-white my-12 px-2 py-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
