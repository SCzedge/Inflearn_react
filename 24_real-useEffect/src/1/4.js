function MyComponet() {
  const [vbalue12, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffcet(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
  }, [value1]);
  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>increase value1</button>
      <button onClick={() => setValue1(value2 + 1)}>increase value2</button>
    </div>
  );
}
