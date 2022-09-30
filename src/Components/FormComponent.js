import React, { useReducer, useState , useCallback} from "react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  TextContainer,
  TextStyle,
  Heading,
  Checkbox,
  Button,
  Modal
} from "@shopify/polaris";
import { Stack, RadioButton } from "@shopify/polaris";
import { handleData } from "./reducer";
function FormComponent() {
  // const [active, setActive] = useState(true);
  const initialStates = {
    product_title: "",
    product_desc: "",
    product_handlingTime: "",
    product_SKU: "",
    product_barcode: false,
    product_Category: "",
    product_image: "",
  };
  const [state, dispatch] = useReducer(handleData, initialStates);
  const [active, setActive] = useState(true);
  // 
  const displayData = useCallback(() => setActive(!active), [active]);
  const activator = (
    <Button fullWidth primary onClick={displayData}>
      Add Product
    </Button>
  );
  return (
    <>
      <Page
        breadcrumbs={[{ content: "Products", url: "/products" }]}
        title="Add New Product"
      >
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Title</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Mention the title of the product that you want to display to
                    the customers on the Amazon marketplace.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.product_title}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_title",
                      value: value,
                    })
                  }
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Description</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Mention a detailed yet precise product description embedded
                    with 'Keywords' that define the product appropriately
                    here.To know more about Amazon's product description policy,
                    click on the link HERE!
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.product_desc}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_desc",
                      value: value,
                    })
                  }
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Handling Time</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Mention the title of the product that you want to display to
                    the customers on the Amazon marketplace.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.product_handlingTime}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_handlingTime",
                      value: value,
                    })
                  }
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Amazon parent SKU</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Set the unique SKU that identify the shopify products
                    against Amazon's listing.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  type="number"
                  value={state.product_SKU}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_SKU",
                      value: value,
                    })
                  }
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Barcode/GTIN Exemption</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Enable the checkbox to upload products with Barcode
                    Exemption on Amazon.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <Checkbox
                  label="Basic checkbox"
                  checked={state.product_barcode}
                  value={state.product_barcode}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_barcode",
                      value: value,
                    })
                  }
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Add Amazon Category</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Set Amazon category/ Browse Node for a product, to set the
                    Searchability & browsing hierarchy on Amazon marketplace.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.product_Category}
                  onChange={(value) =>
                    dispatch({
                      type: "ADD",
                      field: "product_Category",
                      value: value,
                    })
                  }
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        <Layout>
          <Layout.Section oneThird>
            <div style={{ marginTop: "var(--p-space-5)" }}>
              <TextContainer>
                <Heading>Image Selection</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Select the best image combinations or add new image(a
                    maximum of 9) for your product displayed as a part of the
                    product images when it gets uploaded on Amazon.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <Stack vertical>
                  <RadioButton
                    label="Set product images as shown on shopify"
                    checked={state.product_image === "Shopify"}
                    id="Shopify"
                    onChange={(checked, value) =>
                      dispatch({
                        type: "ADD",
                        field: "product_image",
                        value: value,
                      })
                    }
                  />
                  <RadioButton
                    label="Set custom Amazon images"
                    checked={state.product_image === "Amazon"}
                    id="Amazon"
                    onChange={(checked, value) =>
                      dispatch({
                        type: "ADD",
                        field: "product_image",
                        value: value,
                      })
                    }
                  />
                </Stack>
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <hr />
        
        <hr />
      </Page>
      <div style={{height: '500px'}}>
      <Modal
        title="Reach more shoppers with Instagram product tags"
        titleHidden
        activator={activator}
        open={active}
        onClose={displayData}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Title:{state.product_title}<br/>
              Description:{state.product_desc}<br/>
              Handling Time:{state.product_handlingTime}<br/>
              SKU:{state.product_SKU}<br/>
              Barcode:{state.product_barcode}<br/>
              Add Category:{state.product_Category}<br/>
              Image Priority:{state.product_image}<br/>
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
    </>
  );
}

export default FormComponent;
