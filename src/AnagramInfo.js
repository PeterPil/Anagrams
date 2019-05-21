import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

export default function AnagramInfo(props) {
  return props.isAnagram ? (
    <p className="anagrams__info">
      <FontAwesomeIcon icon={faCheckCircle} />
      It is an anagram
    </p>
  ) : (
    <p className="anagrams__info">
      <FontAwesomeIcon icon={faTimesCircle} />
      It isn't anagram!
    </p>
  );
}

