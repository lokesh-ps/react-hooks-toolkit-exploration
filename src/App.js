import React, {
  useState,
  useLayoutEffect,
  useReducer,
  useEffect,
  useRef,
  createContext,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";
import Button from "./Button";
import Login from "./Login";
import User from "./User";
import Child from "./Child";

// Basics
// export default function App() {
//   let inputValue = 0;
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <h1>{inputValue}</h1>
//       <button onClick={generate}>Generate</button>
//     </div>
//   );
//   function generate() {
//     inputValue = inputValue + 1;
//     // inputValue is getting updated , but in UI its not we need to tell React to re render the UI so
//     // for that we need to use useState hook
//     console.log(inputValue);
//   }
// }

// useState
// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [showText, setShowText] = useState(false);
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <h1>{counter}</h1>
//       <button onClick={generate}>Generate</button>
//       {showText && <h1>This is the Text</h1>}
//     </div>
//   );
//   function generate() {
//     setCounter(counter + 1); // counter is getting updated properly in UI now
//     setShowText(!showText);
//   }
// }

// useReducer

// export default function App() {
//   const [state, dispatch] = useReducer(ReducerFun, {
//     counter: 0,
//     showText: false,
//   });
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <h1>{state.counter}</h1>
//       <button onClick={generate}>Generate</button>
//       {state.showText && <h1>This is the Text</h1>}
//     </div>
//   );
//   function generate() {
//     dispatch({ type: "INCREMENT" });
//     dispatch({ type: "TOGGLETEXT" });
//   }
//   function ReducerFun(state, action) {
//     console.log(state, action);
//     switch (action.type) {
//       case "INCREMENT":
//         return {
//           ...state,
//           counter: state.counter + 1,
//         };
//       case "TOGGLETEXT":
//         return {
//           ...state,
//           showText: !state.showText,
//         };
//     }
//   }
// }

// useEffect & useState
// export default function App() {
//   const [data, setData] = useState("");
//   const [count, setCount] = useState(0);
//   //1st method
//   // useEffect(async () => {
//   //   axios
//   //     .get("https://jsonplaceholder.typicode.com/comments")
//   //     .then((response) => {
//   //       setData(response.data[0].email);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error.message);
//   //     });
//   // });

//   //2nd method
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/comments"
//         );
//         setData(response.data[0].email);
//         console.log("API was called");
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <h1>Hello World {data}</h1>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

//useRef

// export default function App() {
//   const inputRef = useRef(null);
//   const onBtnClk = () => {
//     // console.log(inputRef.current.value);
//     inputRef.current.value = "";
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//       <h1>Lokesh</h1>
//       <input type="text" placeholder="Enter something..." ref={inputRef} />
//       <button onClick={onBtnClk}> Change Name</button>
//     </div>
//   );
// }

// useLayoutEffect

// export default function App() {
//   const inputRef = useRef(null);
//   useEffect(() => {
//     inputRef.current.value = "HELLO";
//   }, []);
//   useLayoutEffect(() => {
//     console.log("useLayout Effect2");
//     console.log(inputRef.current.value);
//   }, []);
//   return (
//     <div className="App">
//       <input
//         ref={inputRef}
//         value="Lokesh"
//         style={{ width: "200px", height: "100px" }}
//       />
//     </div>
//   );
// }

//useImperativeHandle,forwardRef
// export default function App() {
//   const buttonRef = useRef(null);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           buttonRef.current.alterToggle();
//         }}
//       >
//         Button From Parent
//       </button>
//       <Button ref={buttonRef} />
//     </div>
//   );
// }

// useContext
// export const AppContext = createContext(null);
// export default function App() {
//   const [username, setUsername] = useState("-");
//   let text = "Enter the Text Below";
//   return (
//     //<div>
//     // <Login setUsername={setUsername} />
//     // <User username={username} />
//     // </div>
//     <AppContext.Provider value={{ username, setUsername, text }}>
//       <Login />
//       <User />
//     </AppContext.Provider>
//   );
// }

//useMemo
// export default function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }, []);
//   const findLongestName = (comments) => {
//     if (!comments) return null;
//     let longestName = "";
//     // for (let i = 0; i < comments.length; i++) {
//     //   let currentName = comments[i].name;
//     //   if (currentName.length > longestName.length) {
//     //     longestName = currentName;
//     //   }
//     // }
//     for (let { name } of comments) {
//       if (name.length > longestName.length) {
//         longestName = name;
//       }
//     }
//     console.log("This was compiled succesfully");
//     return longestName;
//   };
//   const getLongestName = useMemo(() => findLongestName(data), [data]);
//   return (
//     <div>
//       <div>{getLongestName}</div>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//       {toggle && <h1>toggle</h1>}
//     </div>
//   );
// }

// useCallback

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Dummy text here");

  const returnComment = useCallback(
    (name) => {
      return `${data} ${name}`;
    },
    [data]
  );
  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}
