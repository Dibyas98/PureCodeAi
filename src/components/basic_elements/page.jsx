import { useForm } from "react-hook-form";
import ReactSlider from "react-slider";
import { BreadcrumbAdmin } from "../../helpers";

// input tags
import TextFormInput from "./TextFormInput";
import DateFormInput from "./DateFormInput";
import TextAreaFormInput from "./TextAreaFormInput";
import SelectFormInput from "./SelectFormInput";
import PasswordFormInput from "./PasswordFormInput";
import BasicInputElements from "./BasicInputElements";
import InputSizes from "./InputSizes";
import Checkboxes from "./Checkboxes";



const colors = [
    "primary",
    "success",
    "info",
    "secondary",
    "warning",
    "danger",
    "dark",
  ];

//   color value

  const valCol={
    primary: "#F58220",
      secondary: "#6c757d",
      success: "#43d39e",
      info: "#25c2e3",
      warning: "#ffbe0b",
      danger: "#ff5c75",
      light: "#f8f9fa",
      dark: "#343a40",
  }






const Radios = () => {
    return (
        <div className="border border-default-200 rounded-lg">
            <div className="p-6">
                <h4 className="card-title">Radios</h4>
                <div>
                    <div className="mt-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    name="formRadio"
                                    id="formRadio01"
                                    defaultChecked
                                />
                                <label className="ms-1.5" htmlFor="formRadio01">
                                    Toggle this custom radio
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    name="formRadio"
                                    id="formRadio02"
                                />
                                <label className="ms-1.5" htmlFor="formRadio02">
                                    Or toggle this other custom radio
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h6 className="text-sm mb-2">Inline</h6>
                        <div className="flex gap-5">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    name="InlineRadio"
                                    id="InlineRadio01"
                                    defaultChecked
                                />
                                <label className="ms-1.5" htmlFor="InlineRadio01">
                                    Toggle this custom radio
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    name="InlineRadio"
                                    id="InlineRadio02"
                                />
                                <label className="ms-1.5" htmlFor="InlineRadio02">
                                    Or toggle this other custom radio
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h6 className="text-sm mb-2">Disabled</h6>

                        <div className="flex gap-5">
                            <div className="opacity-75">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    id="formRadio04"
                                    defaultChecked
                                    disabled
                                />
                                <label className="ms-1.5" htmlFor="formRadio04">
                                    Toggle this custom radio
                                </label>
                            </div>

                            <div className="opacity-75">
                                <input
                                    type="radio"
                                    className="form-radio text-primary"
                                    id="formRadio05"
                                    disabled
                                />
                                <label className="ms-1.5" htmlFor="formRadio05">
                                    Or toggle this other custom radio
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-5">
                        <h4>Colors</h4>

                        {(colors || []).map((color, idx) => {
                            return (
                                <div key={idx} className="flex items-center">
                                    <input
                                        className={`form-radio text-${color}`}
                                        type="radio"
                                        id={`"formRadio${idx + 1}`}
                                        defaultChecked
                                    />
                                    <label className="ms-1.5" htmlFor={`formRadio${idx + 1}`}>
                                        {color.charAt(0).toUpperCase() + color.slice(1)} Radio
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Switches = () => {
    return (
      <div className="border border-default-200 rounded-lg">
        <div className="p-6">
          <h4 className="card-title">Switch</h4>
  
          <div>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="chechThisSwitch"
                    defaultChecked
                  />
                  <label className="ms-1.5" htmlFor="chechThisSwitch">
                    Check this Switch
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="chechThisSwitch2"
                  />
                  <label className="ms-1.5" htmlFor="chechThisSwitch2">
                    Check this Switch
                  </label>
                </div>
              </div>
            </div>
  
            <div className="mt-5">
              <h6 className="text-sm mb-2">Inline</h6>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="formInlineSwitch1"
                    defaultChecked
                  />
                  <label className="ms-1.5" htmlFor="formInlineSwitch1">
                    Check this Switch
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="formInlineSwitch2"
                  />
                  <label className="ms-1.5" htmlFor="formInlineSwitch2">
                    Check this Switch
                  </label>
                </div>
              </div>
            </div>
  
            <div className="mt-5">
              <h6 className="text-sm mb-2">Size</h6>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch form-switch-sm text-primary"
                    id="formSwitchSmall"
                    defaultChecked
                  />
                  <label className="ms-1.5" htmlFor="formSwitchSmall">
                    Small Switch
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-switch form-switch-lg text-primary"
                    id="formSwitchlarge"
                  />
                  <label className="ms-1.5" htmlFor="formSwitchlarge">
                    Large Switch
                  </label>
                </div>
              </div>
            </div>
  
            <div className="mt-5">
              <h6 className="text-sm mb-2">Disabled</h6>
  
              <div className="flex gap-2">
                <div className="flex items-center opacity-75">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="formSwitchDisabled"
                    defaultChecked
                    disabled
                  />
                  <label className="ms-1.5" htmlFor="formSwitchDisabled">
                    Check this Switch
                  </label>
                </div>
                <div className="flex items-center opacity-75">
                  <input
                    type="checkbox"
                    className="form-switch text-primary"
                    id="formSwitchDisabled2"
                    disabled
                  />
                  <label className="ms-1.5" htmlFor="formSwitchDisabled2">
                    Check this Switch
                  </label>
                </div>
              </div>
            </div>
  
            <div className="grid md:grid-cols-2 gap-6 mt-5">
              <div className="flex flex-col gap-3">
                <h6>Colors</h6>
  
                {(colors || []).map((color, idx) => {
                return (
                  <div key={idx} className="flex items-center ">
                    <input
                      className={`form-switch text-${color} `}
                      type="checkbox"
                      id={`formSwitch${idx + 1}`}
                      defaultChecked style={{color:valCol[color]}} 
                    />
                    <label className="ms-1.5" htmlFor={`formSwitch${idx + 1}`} >
                      Default Switch
                    </label>
                  </div>
                );
              })}
              </div>
  
              <div className="flex flex-col gap-3">
                <h6>Square Switch</h6>
  
                {(colors || []).map((color, idx) => {
                  return (
                    <div key={idx} className="flex items-center">
                      <input
                        className={`form-switch square text-[${valCol[color]}]`}
                        type="checkbox"
                        id={`formSwitchSquare${idx + 1}`}
                        defaultChecked
                        style={{color:valCol[color]}}
                      />
                      <label
                        className="ms-1.5"
                        htmlFor={`formSwitchSquare${idx + 1}`}
                      >
                        Default Switch
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

const CustomSwitch = () => {
    return (
        <div className="border border-default-200 rounded-lg">
            <div className="p-6">
                <h4 className="card-title mb-4">Custom Switch</h4>

                <div className="flex flex-wrap items-center gap-2">
                    <input type="checkbox" id="switch0" data-switch="none" />
                    <label htmlFor="switch0" data-on-label="" data-off-label=""></label>

                    <input
                        type="checkbox"
                        id="switch1"
                        defaultChecked
                        data-switch="bool"
                    />
                    <label
                        htmlFor="switch1"
                        data-on-label="On"
                        data-off-label="Off"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch2"
                        defaultChecked
                        data-switch="primary"
                    />
                    <label
                        htmlFor="switch2"
                        data-on-label="On"
                        data-off-label="Off"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch3"
                        defaultChecked
                        data-switch="success"
                    />
                    <label
                        htmlFor="switch3"
                        data-on-label="Yes"
                        data-off-label="No"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch4"
                        defaultChecked
                        data-switch="info"
                    />
                    <label
                        htmlFor="switch4"
                        data-on-label="On"
                        data-off-label="Off"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch5"
                        defaultChecked
                        data-switch="warning"
                    />
                    <label
                        htmlFor="switch5"
                        data-on-label="Yes"
                        data-off-label="No"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch6"
                        defaultChecked
                        data-switch="danger"
                    />
                    <label
                        htmlFor="switch6"
                        data-on-label="On"
                        data-off-label="Off"
                    ></label>

                    <input
                        type="checkbox"
                        id="switch7"
                        defaultChecked
                        data-switch="secondary"
                    />
                    <label
                        htmlFor="switch7"
                        data-on-label="Yes"
                        data-off-label="No"
                    ></label>

                    <input
                        type="checkbox"
                        id="switchdis"
                        data-switch="primary"
                        defaultChecked
                        disabled
                    />
                    <label
                        htmlFor="switchdis"
                        data-on-label="On"
                        data-off-label="Off"
                    ></label>
                </div>
            </div>
        </div>
    );
};

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