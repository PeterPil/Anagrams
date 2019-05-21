import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  it("render without crash", () => {
    const MainComponent = mount(<App />);
    expect(MainComponent.find("button")).toHaveLength(1);
    expect(MainComponent.find("input")).toHaveLength(2);
    expect(MainComponent.find("AnagramInfo")).toHaveLength(0);
  });
  it("handle change inputs", () => {
    const MainComponent = mount(<App />);
    MainComponent.find("#firstString").simulate("change", {
      target: {
        id: "firstString",
        value: "start"
      }
    });
    MainComponent.find("#secondString").simulate("change", {
      target: {
        id: "secondString",
        value: "start"
      }
    });
    expect(MainComponent.find("#firstString").props().value).toEqual("start");
    expect(MainComponent.find("#secondString").props().value).toEqual("start");
  });
  it("is Anagram", () => {
    const MainComponent = mount(<App />);
    MainComponent.find("#firstString").simulate("change", {
      target: {
        id: "firstString",
        value: "start"
      }
    });
    MainComponent.find("#secondString").simulate("change", {
      target: {
        id: "secondString",
        value: "trast"
      }
    });
    MainComponent.find("form").simulate("submit", {
      preventDefault: jest.fn()
    });
    expect(
      MainComponent.find("AnagramInfo")
        .find("p")
        .text()
    ).toEqual("It is an anagram");
  });
  it("is not Anagram", () => {
    const MainComponent = mount(<App />);
    MainComponent.find("#firstString").simulate("change", {
      target: {
        id: "firstString",
        value: "start"
      }
    });
    MainComponent.find("#secondString").simulate("change", {
      target: {
        id: "secondString",
        value: "startfd"
      }
    });
    MainComponent.find("form").simulate("submit", {
      preventDefault: jest.fn()
    });
    expect(
      MainComponent.find("AnagramInfo")
        .find("p")
        .text()
    ).toEqual("It isn't anagram!");
  });
});
