

const Banner = () => {
    return (
        <div className="bg-orange-300 h-[70vh] my-10">

              <div className="flex justify-center items-center h-[50vh]">
              <textarea className="textarea textarea-secondary w-[70%] " placeholder="Bio"></textarea>
              <button className="btn btn-secondary ml-5">Find</button>
              </div>
               
        </div>
    );
};

export default Banner;