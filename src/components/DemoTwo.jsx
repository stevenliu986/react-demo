import React from "react";

class DemoTwo extends React.Component {
  state = {
    arr: [10, 20, 30],
  };
  render() {
    let { arr } = this.state;
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "pink",
                  margin: "10px",
                }}
              >
                {item}
              </div>
            );
          })}
          <br />
        </div>
        <button
          onClick={() => {
            arr.push(arr[arr.length - 1] + 10);
            this.setState({ arr });
          }}
        >
          新增
        </button>
        <button
          onClick={() => {
            arr.pop();
            this.setState({ arr });
          }}
        >
          去除
        </button>
      </>
    );
  }
}

export default DemoTwo;
