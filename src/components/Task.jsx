import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Table,
  Tag,
} from "antd";
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
        let { status, time, complete } = record;
        if (+status === 2) time = complete;
        return formatTime(time);
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        let { status } = record;
        return (
          <>
            <Popconfirm title="删除任务" description="您确定要删除该任务？">
              <Button type="link">删除</Button>
            </Popconfirm>

            {+status !== 2 ? (
              <Popconfirm>
                <Button type="link">完成</Button>
              </Popconfirm>
            ) : null}
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
    modalVisible: false,
  };

  // 关闭对话框 & 清除表单
  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  // 新增任务
  submit = () => {};

  render() {
    let { tableData, tableLoading, modalVisible } = this.state;

    return (
      <div className="task-box">
        {/* 头部 */}
        <div className="header">
          <h2 className="title">TASK OA 任务管理系统</h2>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                modalVisible: true,
              });
            }}
          >
            新增任务
          </Button>
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
        <Modal
          title="新增任务窗口"
          open={modalVisible}
          okText="提交"
          onCancel={this.closeModal}
          onOk={this.submit}
        >
          <Form>
            <Form.Item
              label="任务描述"
              name="task"
              validateTrigger="onBlur"
              rules={[{ required: true, message: "请填写任务描述" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="预期完成时间"
              name="time"
              rules={[]}
              validateTrigger="onBlur"
            >
              <DatePicker showTime />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Task;
