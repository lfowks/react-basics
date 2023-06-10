
const Counter2 = (props) => {


  const {number, aumentar} = props;

  return (
    <>
      <div>Counter2 - {counterFromContext}</div>
      <button onClick={aumentar}>Counter 2 +</button>
    </>
  )
}

export default Counter2