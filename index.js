const Box = (props) => {
  //  Write your code here.
  const { className, box } = props;
  return <box className={`${className}`}>{box}</box>;
};

const element = (
  //  Write your code here.
  <div className="content">
    <h1 class="main-heading">Boxes</h1>
    <div className="boxes">
      <Box box="small" className="box-1" />
      <Box box="medium" className="box-2" />
      <Box box="large" className="box-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
