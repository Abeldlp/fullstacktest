import React from "react";
import Enzyme, { shallow } from "enzyme";
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
    expect(stopButton).toBe(1);
  });
});
