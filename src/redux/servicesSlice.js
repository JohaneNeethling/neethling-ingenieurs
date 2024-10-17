import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: [
    {
      id: 1,
      name: "Steel Framing",
      description: "Strong and durable steel framing for any project.",
    },
    {
      id: 2,
      name: "Welding Services",
      description: "High-quality welding for various construction needs.",
    },
  ],
  reducers: {},
});

export default servicesSlice.reducer;
