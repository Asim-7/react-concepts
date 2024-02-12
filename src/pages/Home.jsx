import React from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../components/ButtonCustom";

function Home() {
  return (
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <Link to={"/counter"}>
        <ButtonCustom text="Counter" />
      </Link>

      <Link to={"/form"}>
        <ButtonCustom text="Form" />
      </Link>

      <ButtonCustom text="" />
    </div>
  );
}

export default Home;
