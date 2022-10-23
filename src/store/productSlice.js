import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      name: "Socks",
      url: "http://sc04.alicdn.com/kf/H700cae71382b41d2ae06dfb7dc86b551t.png",
      price: 14.6,
      description: "socks high quality",
      addons: [
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 1.1,
        },
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 1.2,
        },
      ],
      id: 1,
    },
    {
      name: "Razor",
      url: "https://pyxis.nymag.com/v1/imgs/0f9/3e1/a728337cf996524d17bc475956434912c4-merkur-34c.jpg",
      price: 6,
      description: "razor high quality",
      addons: [
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 2.1,
        },
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 2.2,
        },
      ],
      id: 2,
    },
    {
      name: "Shaving cream",
      url: "https://u.makeup.com.ua/6/69/69hhggiynvhu.png",
      price: 7,
      description: "Shaving cream high quality",
      addons: [
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 3.1,
        },
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 3.2,
        },
      ],
      id: 3,
    },
    {
      name: "Wine",
      url: "https://images.prom.ua/1629807217_podarok-sestre-na.jpg",
      price: 8,
      description: "Birthday cake high quality",
      addons: [
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 4.1,
        },
        {
          name: "Raffaello",
          url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYgzXQrFYXf4j8EHpjX4craWt4fP1fulhqVqkk2TTc1TOidbqBX9SMi8PLteu02HV8GYA3A6nH2Yw&usqp=CAc",
          price: 6,
          description: "Raffaello",
          id: 4.2,
        },
      ],
      id: 4,
    },
  ],
};

export const productsSlice = createSlice({
  name: "shop",
  initialState,
});

export default productsSlice.reducer;
