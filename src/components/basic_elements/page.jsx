import React from "react";
// components
import { BreadcrumbAdmin } from "../../helpers";
import BasicInputElements from "./BasicInputElements";
import InputSizes from "./InputSizes";
import Checkboxes from "./Checkboxes";
import Radios from "./Radios";
import Switches from "./Switches";
import CustomSwitch from "./CustomSwitch";







const BasicElements = () => {
    return (
      <div className="w-full lg:ps-64" id="custom-form-ui">
        <div className="page-content space-y-6 p-6">
          <BreadcrumbAdmin title="Basic Elements" subtitle="Forms" />
          <BasicInputElements />
  
          <div className="grid lg:grid-cols-2 gap-6">
            <InputSizes />
            <Checkboxes />
            <Radios />
            <Switches />
            <CustomSwitch />
          </div>
        </div>
      </div>
    );
  };

export default BasicElements