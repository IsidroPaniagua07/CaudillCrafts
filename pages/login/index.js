
const index = () => {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col h-3/4 w-1/3 rounded-md border border-black bg-slate-200 justify-center items-center">
          <h3 className="flex h-1/5 w-full text-5xl font-RobotoMono justify-center items-center">Login</h3>
          <div className="flex h-4/5 w-full flex-col justify-center items-center gap-2">
            <p className="flex flex-col text-2xl">Username: <input className="border-slate-400 border"/></p>
            <p className="flex flex-col text-2xl">Password: <input className="border-slate-400 border"/></p>
            <button onClick={()=>{}} className='border border-black text-2xl rounded-sm bg-slate-500 text-white my-12'>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
