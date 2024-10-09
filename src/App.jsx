import { useState, useCallback, useEffect } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllows, setNumberAllows] = useState(false);
  const [charallows, setcharallows] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllows) str += "1234567890";
    if(charallows) str += "!@#$%^&*_+`~";

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllows, charallows]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllows, charallows, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md bg-gray-700 text-center mx-auto rounded-lg my-8 px-4 py-2 text-orange-500'>
        <h1 className='text-orange-500 text-3xl my-3'>
          Password Generator
        </h1>

        <div className='flex shadow overflow-hidden mb-4 rounded-lg py-2'>
          <input 
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white py-0.5 px-2 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              className='cursor-pointer'
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"  
              checked={numberAllows}
              id='numberInput'
              onChange={() => setNumberAllows((prev) => !prev)}
            />
            <label htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"  
              checked={charallows}
              id='charInput'
              onChange={() => setcharallows((prev) => !prev)}
            />
            <label htmlFor="charInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
