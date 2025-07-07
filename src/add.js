
function AddingTodos({ todos, setTodos, inputValue, setInputValue }) {
    return (
        <div className=" p-5 flex items-center justify-center gap-2  w-full max-w-md">

            <form onSubmit={(e) => {
                e.preventDefault();
                if (inputValue.trim()) {
                    setTodos([...todos, inputValue]);
                    setInputValue('');
                }
            }} className="flex flex-col items-center justify-center gap-2 w-full max-w-md">

        

              <input type="text" placeholder="Add your todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
               className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out mt-4 w-full min-w-[300px] max-w-full"  />
              <button type="submit" className="bg-violet-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-violet-800 transition duration-300 ease-in-out">add</button>
            </form>
            
         </div>
    );
}

export default AddingTodos;