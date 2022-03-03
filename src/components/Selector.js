import React, { useReducer } from "react";
// import Select from "react-select";
import "./selectorStyle.css";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const ACTIONS = {
  setCity: "setCity",
  setDistrict: "setDistrict",
  setKhoroo: "setKhoroo",
};

const DATA = [
  {
    city_id: "asfd",
    name: "Ulaanbaatar",
    items: [
      {
        district_id: "fsdbds",
        name: "Chingeltei",
        items: [
          {
            khoroo_id: "dsfsdg",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo2",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoro03",
            name: "3-r khoroo",
          },
          {
            khoroo_id: "Khoroo4",
            name: "4-r khoroo",
          },
          {
            khoroo_id: "Khoroo5",
            name: "5-r khoroo",
          },
          {
            khoroo_id: "Khoroo6",
            name: "6-r khoroo",
          },
        ],
      },
      {
        district_id: "duureg2",
        name: "Sukhabaatar",
        items: [
          {
            khoroo_id: "Khoroo7",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo8",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo9",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg3",
        name: "Bayanzurkh",
        items: [
          {
            khoroo_id: "Khoroo10",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo11",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo12",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg4",
        name: "Bayangol",
        items: [
          {
            khoroo_id: "Khoroo13",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo14",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo15",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg5",
        name: "Songinohairhan",
        items: [
          {
            khoroo_id: "Khoroo16",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo17",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo18",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg6",
        name: "Han-Uul",
        items: [
          {
            khoroo_id: "Khoroo19",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo20",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo21",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg7",
        name: "Nalaih",
        items: [
          {
            khoroo_id: "Khoroo22",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo23",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo24",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg8",
        name: "Baganuur",
        items: [
          {
            khoroo_id: "Khoroo25",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo26",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo27",
            name: "3-r khoroo",
          },
        ],
      },
      {
        district_id: "Duureg9",
        name: "Bagakhangai",
        items: [
          {
            khoroo_id: "Khoroo28",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo29",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo30",
            name: "3-r khoroo",
          },
        ],
      },
    ],
  },
  {
    city_id: "gdSD",
    name: "Orkhon",
    items: [
      {
        district_id: "Duureg1",
        name: "Erdenet",
        items: [
          {
            khoroo_id: "Khoroo1",
            name: "1-r micro",
          },
          {
            khoroo_id: "Khoroo2",
            name: "2-r mikro",
          },
          {
            khoroo_id: "Khoroo3",
            name: "3-r mikro",
          },
        ],
      },
      {
        district_id: "Duureg2",
        name: "Sukhabaatar",
        items: [
          {
            khoroo_id: "Khoroo4",
            name: "1-r khoroo",
          },
          {
            khoroo_id: "Khoroo5",
            name: "2-r khoroo",
          },
          {
            khoroo_id: "Khoroo6",
            name: "3-r khoroo",
          },
        ],
      },
    ],
  },
  {
    city_id: "sdfge",
    name: "Darkhan",
    items: [
      {
        district_id: "District1",
        name: "Darkhan",
        items: [
          {
            khoroo_id: "Khoroo1",
            name: "1-r micrso",
          },
          {
            khoroo_id: "Khoroo2",
            name: "2-r mikrso",
          },
        ],
      },
    ],
  },
];

function reducer(selectedItems, action) {
  switch (action.type) {
    case "setCity":
      console.log("Its here");
      return { city_id: action.value, district_id: "", khoroo_id: "" };
    case "setDistrict":
      console.log("Its not here");
      return { ...selectedItems, district_id: action.value, khoroo_id: "" };
    case "setKhoroo":
      return { ...selectedItems, khoroo_id: action.value };
    case "all":
      return {
        city_id: "",
        district_id: "",
        khoroo_id: "",
      };
    default:
      console.log("Overall Action is ");
      break;
  }
}

const Selector = () => {
  const [selectedItems, updateState] = useReducer(reducer, {
    city_id: "",
    district_id: "",
    khoroo_id: "",
  });

  console.log("selectedItems", selectedItems);

  const handleDeleteButton = () => {
    updateState({ type: "all" });
  };

  const handleCheckButton = () => {
    console.log(selectedItems);
  };
  // console.log(selectedItems);

  return (
    // <div className="container">
    //   <Select
    //     options={DATA}
    //     multi={true}
    //     label={DATA.name}
    //     onChange={(e) => {
    //       updateState({ type: ACTIONS.setCity, value: e.value });
    //     }}
    //   ></Select>
    // </div>

    <Container maxWidth="md">
      <Box>
        <Box sx={{ minWidth: 120, maxWidth: 300, mt: 15, mx: "auto" }}>
          <FormControl fullWidth>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city-select"
              value={selectedItems.city_id}
              label="City"
              onChange={(e) => {
                updateState({ type: ACTIONS.setCity, value: e.target.value });
                console.log("New value sis:" + selectedItems);
              }}
            >
              {DATA.map((item, index) => (
                <MenuItem key={index} value={item.city_id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: 300, mt: 5, mx: "auto" }}>
          <FormControl fullWidth>
            <InputLabel id="districe-label">District</InputLabel>
            <Select
              labelId="district-label"
              id="district-select"
              value={selectedItems?.district_id}
              label="District"
              onChange={(e) => {
                updateState({
                  type: ACTIONS.setDistrict,
                  value: e.target.value,
                });
                console.log("Target value is:" + e.target.value);
              }}
              disabled={!selectedItems.city_id}
            >
              {selectedItems?.city_id
                ? DATA.find(
                    (el) => el.city_id === selectedItems.city_id
                  ).items.map((item, index) => (
                    <MenuItem key={index} value={item.district_id}>
                      {item.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: 300, mt: 5, mx: "auto" }}>
          <FormControl fullWidth>
            <InputLabel id="khoroo-label">Khoroo</InputLabel>
            <Select
              labelId="khoroo-label"
              id="khoroo-select"
              value={selectedItems.khoroo_id}
              label="Khoroo"
              onChange={(e) => {
                updateState({ type: ACTIONS.setKhoroo, value: e.target.value });
                console.log("Target value is:" + e.target.value);
              }}
              disabled={!selectedItems.district_id}
            >
              {selectedItems?.district_id
                ? DATA.find((el) => el.city_id === selectedItems.city_id)
                    .items.find(
                      (el) => el.district_id === selectedItems.district_id
                    )
                    .items.map((item, index) => (
                      <MenuItem key={index} value={item.khoroo_id}>
                        {item.name}
                      </MenuItem>
                    ))
                : null}
            </Select>
          </FormControl>
        </Box>{" "}
        <Box sx={{ minWidth: 120, maxWidth: 300, mt: 5, mx: "auto" }}>
          <Button variant="contained" fullWidth onClick={handleDeleteButton}>
            Clear
          </Button>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: 300, mt: 5, mx: "auto" }}>
          <Button variant="contained" fullWidth onClick={handleCheckButton}>
            Check
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Selector;
