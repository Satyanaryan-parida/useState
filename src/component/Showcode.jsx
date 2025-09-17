const Showcode = () => {
  const message = "I did not learn React Router yet, I will update it later. "
  return (
    <div id="showcode">
      <div className="codebtn code1">
          <span onClick={()=>{alert(message.toUpperCase())}}>WithoutUseState Code</span>
      </div>
      <div className="codebtn code2">
          <span onClick={()=>{alert(message.toUpperCase())}}>WithUseState Code</span>
      </div>
    </div>
  );
};

export default Showcode;
