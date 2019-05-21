import React from "react";
import { mount } from "enzyme";
import AnagramInfo from "./AnagramInfo";

describe("<AnagramInfo/>", () => {
  it("initial render with default icon", () => {
    const AnagramInfoRender = mount(<AnagramInfo/>);
    expect(AnagramInfoRender.text()).toEqual("It isn't anagram!");
    expect(AnagramInfoRender.find(".fa-times-circle")).toHaveLength(1);
  });
  it("render is anagram message", () => {
    const AnagramInfoRender = mount(<AnagramInfo isAnagram={true}/>);
    expect(AnagramInfoRender.text()).toEqual("It is an anagram");
    expect(AnagramInfoRender.find(".fa-check-circle")).toHaveLength(1);
  })
  it("render is not anagram message", () => {
    const AnagramInfoRender = mount(<AnagramInfo isAnagram={false}/>);
    expect(AnagramInfoRender.text()).toEqual("It isn't anagram!");
    expect(AnagramInfoRender.find(".fa-times-circle")).toHaveLength(1);
  })
});
