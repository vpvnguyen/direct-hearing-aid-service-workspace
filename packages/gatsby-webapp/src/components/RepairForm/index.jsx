import * as React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    padding: 4,
  },
});

// Create Document Component
const RepairForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    problem: "",
  });

  return (
    <div
      css={(theme) => ({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e?.target?.value,
            });
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="address1">address1:</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={(e) => {
            setFormData({
              ...formData,
              address1: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="address2">address2:</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={(e) => {
            setFormData({
              ...formData,
              address2: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="city">city:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={(e) => {
            setFormData({
              ...formData,
              city: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="state">state:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={(e) => {
            setFormData({
              ...formData,
              state: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="zip">zip:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={(e) => {
            setFormData({
              ...formData,
              zip: e?.target?.value,
            });
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="problem">problem:</label>
        {/* <input
          type="text"
          name="problem"
          value={formData.problem}
          onChange={(e) => {
            setFormData({
              ...formData,
              problem: e?.target?.value,
            });
          }}
        /> */}
        <textarea
          type="text"
          name="problem"
          value={formData.problem}
          onChange={(e) => {
            setFormData({
              ...formData,
              problem: e?.target?.value,
            });
          }}
        />
      </fieldset>

      <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Name: {formData.name}</Text>
              <Text style={styles.text}>Email: {formData.email}</Text>
              <Text style={styles.text}>Address1: {formData.address1}</Text>
              <Text style={styles.text}>Address2: {formData.address2}</Text>
              <Text style={styles.text}>City: {formData.city}</Text>
              <Text style={styles.text}>State: {formData.state}</Text>
              <Text style={styles.text}>Zip: {formData.zip}</Text>
              <Text style={{ ...styles.text, paddingTop: 20 }}>Problem:</Text>
              <Text style={{ ...styles.text }}>{formData.problem}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.text}>Email: {formData.email}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default RepairForm;
