import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SlotMachine from "./components/SlotMachine";

Enzyme.configure({ adapter: new Adapter() });

describe("SlotMachine", () => {
  it("should render Spin button", () => {
    const wrapper = shallow(<SlotMachine />);
    const spinButton = wrapper.find(`[data-test="spin_button"]`);
    expect(spinButton.length).toBe(1);
  });

  it("should render stop button", () => {
    const wrapper = shallow(<SlotMachine />);
    const stopButton = wrapper.find(`[data-test="stop_button"]`);
    expect(stopButton.length).toBe(1);
  });

  it("should load the state", () => {
    const wrapper = shallow(<SlotMachine />);
    const spiner = wrapper.find(".spin_button");
    expect(wrapper.state("checkable")).toEqual("");
    expect(wrapper.state("coins")).toEqual(20);
  });

  it("should use coins when spinning", () => {
    const wrapper = shallow(<SlotMachine />);
    wrapper.find("#spin_button").simulate("click");
    const coins = wrapper.find("#coins_holder");
    expect(coins.length).toBe(1);
    expect(coins.text()).toBe("coins: 20");
  });
});
