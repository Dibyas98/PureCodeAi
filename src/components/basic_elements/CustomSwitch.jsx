import React from "react";
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

export default CustomSwitch