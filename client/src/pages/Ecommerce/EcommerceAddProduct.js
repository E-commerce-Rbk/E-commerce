import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MetaTags from "react-meta-tags";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import Dropzone from "react-dropzone";
import $ from "jquery";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { post, put } from "helpers/api_helper";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { get } from "lodash";

const EcommerceAddProduct = () => {
  const [selectedFiles, setselectedFiles] = useState([]);
  const [desc, setDesc] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const options = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" },
  ];

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setselectedFiles(files);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  async function getProductData() {
    try {
      const res = await get("/product/" + id);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e, v) {
    e.preventDefault();
    try {
      v.desciption = desc;
      if (id) {
        await put("/product/" + id, v);
      } else {
        await post("/product", v);
      }
      history.push("/product");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (id) {
      getProductData();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add Product | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Basic Information</CardTitle>
                  <CardSubtitle className="mb-4">
                    Fill all information below
                  </CardSubtitle>

                  <AvForm onValidSubmit={handleSubmit}>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="productname">Product Name</Label>
                          <AvField
                            id="productname"
                            name="productName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="stock">Stock</Label>
                          <AvField
                            id="stock"
                            name="stock"
                            type="number"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="price">Price</Label>
                          <AvField
                            id="price"
                            name="price"
                            type="number"
                            className="form-control"
                          />
                        </div>
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="imageUrl">Image URL</Label>
                          <AvField
                            id="imageUrl"
                            name="imageUrl"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label className="control-label">Category</Label>
                          <AvField
                            type="select"
                            name="category"
                            className="form-select select2"
                          >
                            <option>Jewlery and Watches</option>
                            <option>Home And Garden</option>
                            <option>Computer Electronic</option>
                            <option>Beauty Product</option>
                          </AvField>
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="productdesc">
                            Product Description
                          </Label>
                          <textarea
                            onInput={(e) => setDesc(e.currentTarget.value)}
                            name="description"
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary" className="btn ">
                        Save Changes
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() => history.push("/product")}
                      >
                        Cancel
                      </Button>
                    </div>
                  </AvForm>
                </CardBody>
              </Card>

              {/* <Card>
                <CardBody>
                  <CardTitle className="mb-3">Product Images</CardTitle>
                  <Form>
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="dz-message needsclick">
                              <div className="mb-3">
                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Form>
                </CardBody>
              </Card> */}

              {/* <Card>
                <CardBody>
                  <CardTitle>Meta Data</CardTitle>
                  <CardSubtitle className="mb-3">
                    Fill all information below
                  </CardSubtitle>

                  <Form>
                    <Row>
                      <Col sm={6}>
                        <div className="mb-3">
                          <Label htmlFor="metatitle">Meta title</Label>
                          <Input
                            id="metatitle"
                            name="productname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="metakeywords">Meta Keywords</Label>
                          <Input
                            id="metakeywords"
                            name="manufacturername"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </Col>

                      <Col sm={6}>
                        <div className="mb-3">
                          <Label htmlFor="metadescription">
                            Meta Description
                          </Label>
                          <textarea
                            className="form-control"
                            id="metadescription"
                            rows="5"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary" className="">
                        Save Changes
                      </Button>
                      <Button type="submit" color="secondary" className="">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceAddProduct;
