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

const Checkboxes = () => {
    return (
        <div className="border border-default-200 rounded-lg">
            <div className="p-6">
                <h4 className="card-title">Checkboxes</h4>

                <div>
                    <div className="mt-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox rounded text-primary"
                                    id="customCheck1"
                                    defaultChecked
                                />
                                <label className="ms-1.5" htmlFor="customCheck1">
                                    Check this checkbox
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox rounded text-primary"
                                    id="customCheck2"
                                />
                                <label className="ms-1.5" htmlFor="customCheck2">
                                    Check this checkbox
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
                                    className="form-checkbox rounded text-primary"
                                    id="InlineCheckbox1"
                                    defaultChecked
                                />
                                <label className="ms-1.5" htmlFor="InlineCheckbox1">
                                    Check this checkbox
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox rounded text-primary"
                                    id="InlineCheckbox2"
                                />
                                <label className="ms-1.5" htmlFor="InlineCheckbox2">
                                    Check this checkbox
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
                                    className="form-checkbox rounded text-primary"
                                    id="customCheck5"
                                    defaultChecked
                                    disabled
                                />
                                <label className="ms-1.5" htmlFor="customCheck5">
                                    Check this checkbox
                                </label>
                            </div>
                            <div className="flex items-center opacity-75">
                                <input
                                    type="checkbox"
                                    className="form-checkbox rounded text-primary"
                                    id="customCheck6"
                                    disabled
                                />
                                <label className="ms-1.5" htmlFor="customCheck6">
                                    Check this checkbox
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-5">
                        <h6>Colors</h6>

                        {(colors || []).map((color, idx) => {
                            return (
                                <div key={idx} className="flex items-center">
                                    <input
                                        className={`form-checkbox rounded text-${color}`}
                                        type="checkbox"
                                        id={`customckeck${idx + 1}`}
                                        defaultChecked style={{color:valCol[color]}} 
                                    />
                                    <label className="ms-1.5" htmlFor={`customckeck${idx + 1}`}>
                                        {color.charAt(0).toUpperCase() + color.slice(1)} Checkbox
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

export default  Checkboxes