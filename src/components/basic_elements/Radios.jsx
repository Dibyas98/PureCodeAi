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
                                        defaultChecked style={{color:valCol[color]}} 
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

export default Radios