import React, { useState } from "react";
import {
  Col,
  Menu,
  Row,
  Layout,
  Card,
  Typography,
  Divider,
  Pagination,
} from "antd";

const { Content, Header, Footer, Sider } = Layout;
const TopMenuItems = [
  {
    key: "design",
    label: (
      <a href="https://ant.design/docs/spec/introduce" target="_blank">
        Design
      </a>
    ),
  },
  {
    key: "docs",
    label: (
      <a href="https://ant.design/docs/react/introduce" target="_blank">
        Docs
      </a>
    ),
  },
  {
    key: "components",
    label: (
      <a href="https://ant.design/components/overview/" target="_blank">
        Components
      </a>
    ),
  },
  {
    key: "resources",
    label: (
      <a href="https://ant.design/docs/resources" target="_blank">
        Resources
      </a>
    ),
  },
];

const components = [
  {
    category: "General",
    components: [
      {
        title: "Button",
        image: "https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg",
      },
      {
        title: "Icon",
        image: "https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg",
      },
      {
        title: "Typography",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Layout",
    components: [
      {
        title: "Divider",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Grid",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Layout",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Space",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Navigation",
    components: [
      {
        title: "Affix",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Breadcrumb",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Dropdown",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Menu",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Pagination",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "PageHeader",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Steps",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Data Entry",
    components: [
      {
        title: "AutoComplete",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Checkbox",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Cascader",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Datepicker",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Form",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Input",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "InputNumber",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Mentions",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Rate",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Radio",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Switch",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Slider",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Data Display",
    components: [
      {
        title: "Avatar",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Badge",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Comment",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Collapse",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Carousel",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Card",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Calendar",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Descriptions",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Empty",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Image",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "List",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Popover",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Feedback",
    components: [
      {
        title: "Alert",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Drawer",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Modal",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Message",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Notification",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Progress",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Popconfirm",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Result",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Spin",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Skeleton",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
  {
    category: "Other",
    components: [
      {
        title: "Anchor",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "Backtop",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
      {
        title: "ConfigProvider",
        image:
          "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
      },
    ],
  },
];

function PageLayout() {
  const [data] = useState(components);
  const [currentPage, setCurrentPage] = useState(1);
  const [startingIndex, setStartingIndex] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(Math.floor(data.length / 3));
  const [pagindationData, setPaginationData] = useState(
    data.slice(currentPage - 1, currentPage * dataPerPage)
  );
  const onPageChange = (page) => {
    console.log("current page", page);
    //show the previous state
    console.log("previous page", currentPage);
    console.log("previous accessed index", startingIndex);
    console.log("total data", data);
    console.log("previous paginated data", pagindationData);
    setCurrentPage(page);
    setPaginationData(data.slice((page - 1) * dataPerPage, page * dataPerPage));
    setStartingIndex(page * dataPerPage);
  };
  return (
    <>
      <Layout>
        <Header>
          <Row>
            <Col lg={5} sm={24}>
              <h1>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  alt="Logo"
                  height="40px"
                  width="40px"
                  style={{ marginRight: "5px" }}
                />
                Ant Design - Demo
              </h1>
            </Col>
            <Col lg={19} sm={0}>
              <Menu items={TopMenuItems} key="TopMenu" mode="horizontal" />
            </Col>
          </Row>
        </Header>
        <Row style={{ height: "100%" }}>
          <Col xs={0} sm={0} md={5} lg={5}>
            <Layout>
              <Sider>
                <Menu
                  key={"sideNavigation"}
                  mode="inline"
                  items={components.map((component) => {
                    return {
                      label: component.category,
                      key: component.category,
                      children: component.components.map((componentType) => {
                        return {
                          label: componentType.title,
                          key: componentType.title,
                        };
                      }),
                    };
                  })}
                  style={{ width: "100%", height: "100%" }}
                />
              </Sider>
            </Layout>
          </Col>
          <Col sm={24} lg={19}>
            <Layout>
              <Content>
                <Card title="Components Overview" bordered={false}>
                  {pagindationData.map((component) => {
                    return (
                      <Row style={{ marginBottom: "20px" }} gutter={[16, 16]}>
                        <Typography.Title
                          level={3}
                          style={{ marginBottom: "0px" }}
                        >
                          {component.category}
                        </Typography.Title>
                        <Divider type="horizontal" />
                        {component.components.map((componentType) => {
                          return (
                            <Col xs={24} lg={6}>
                              <Card
                                size="small"
                                title={componentType.title}
                                style={{ height: "200px" }}
                              >
                                <img
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                  }}
                                  src={componentType.image}
                                />
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    );
                  })}
                  <Pagination
                    total={data.length}
                    showTotal={(total) => `Total ${total} items`}
                    onChange={onPageChange}
                    current={currentPage}
                    pageSize={dataPerPage}
                  />
                </Card>
              </Content>
            </Layout>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default PageLayout;
