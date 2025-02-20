```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the return function in useEffect
    return () => {
      console.log('Component is unmounting');
    };
  }, []); // Empty dependency array means this runs only once after the component mounts

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```