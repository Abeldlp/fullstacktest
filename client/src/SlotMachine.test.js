import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SlotMachine from "./components/SlotMachine";

Enzyme.configure({ adapter: new Adapter() });

describe("SlotMachine", () => {
  it("should render with no errors", () => {
    const wrapper = shallow(<SlotMachine />);
  });
});
