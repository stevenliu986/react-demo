import { Button, Popconfirm, Table, Tag } from "antd";
import React from "react";
import "./Task.scss";

// 对日期的处理
const zero = (text) => {
  text = String(text);
  return text.length < 2 ? "0" + text : text;
};

const formatTime = (time) => {
  let arr = time.match(/\d+/g),
    [, month, day, hours = "00", minutes = "00"] = arr;
  return `${zero(month)}-${zero(day)} ${zero(hours)}:${zero(minutes)}`;
};

class Task extends React.Component {
  columns = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "任务描述",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (text) => (+text === 1 ? "未完成" : "已完成"),
      key: "status",
    },
    {
      title: "完成时间",
      dataIndex: "finishDate",
      render: (_, record) => {
        let { state, time, complete } = record;
        if (+state === 2) time = complete;
        return formatTime(time);
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        let { state } = record;
        return (
          <>
            <Popconfirm>
              <Button type="link">删除</Button>
            </Popconfirm>
            <Popconfirm>
              <Button type="link">完成</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  dataSource = [
    {
      id: 1,
      task: "今天阳光明媚",
      status: 1,
      time: "2022-11-23 18:00:00",
      complete: "2022-11-24 12:30:00",
    },
    {
      id: "2",
      task: "今天阳光明媚，适合郊游",
      status: 2,
      time: "2022-11-23 18:00:00",
      complete: "2022-11-24 12:30:00",
    },
  ];

  state = {
    tableData: [],
    tableLoading: false,
  };
  render() {
    let { tableData, tableLoading } = this.state;

    return (
      <div className="task-box">
        {/* 头部 */}
        <div className="header">
          <h2 className="title">TASK OA 任务管理系统</h2>
          <Button type="primary">新增任务</Button>
        </div>

        {/* 标签 */}
        <div className="tag-box">
          <Tag color="#1677ff">全部</Tag>
          <Tag>未完成</Tag>
          <Tag>已完成</Tag>
        </div>

        {/* 表格 */}
        <Table
          dataSource={this.dataSource}
          columns={this.columns}
          pagination={false}
        />

        {/* 对话框 & 表单 */}
      </div>
    );
  }
}

export default Task;
