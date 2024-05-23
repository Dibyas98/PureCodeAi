import React from "react";
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

  export default Switches