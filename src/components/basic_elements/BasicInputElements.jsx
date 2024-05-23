import { useForm } from "react-hook-form";
import ReactSlider from "react-slider";


// input tags
import TextFormInput from "./TextFormInput";
import DateFormInput from "./DateFormInput";
import TextAreaFormInput from "./TextAreaFormInput";
import SelectFormInput from "./SelectFormInput";
import PasswordFormInput from "./PasswordFormInput";

const BasicInputElements = () => {
    const { control } = useForm();
    return (
        <div className="border border-default-200 rounded-lg mb-6">
            <div className="p-6">
                <h4 className="card-title mb-4">Input Types</h4>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <form>
                            <TextFormInput
                                label="Text"
                                labelClassName="mb-2"
                                type="text"
                                name="text"
                                className="form-input"
                                containerClassName="mb-3"
                                key="text"
                                control={control}
                                fullWidth
                            />

                            <TextFormInput
                                label="Email"
                                labelClassName="mb-2"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-input"
                                containerClassName="mb-3"
                                key="email"
                                control={control}
                                fullWidth
                            />
                            <TextFormInput
                                label="Password"
                                labelClassName="mb-2"
                                type="password"
                                name="password"
                                containerClassName="mb-3"
                                className="form-input"
                                key="password"
                                control={control}
                                fullWidth
                            />

                            <PasswordFormInput
                                label="Placeholder"
                                labelClassName="mb-2"
                                type="text"
                                containerClassName="mb-3"
                                name="placeholder"
                                placeholder="placeholder"
                                className="form-input"
                                key="placeholder"
                                control={control}
                                fullWidth
                            />

                            <TextAreaFormInput
                                label="Text area"
                                name="textarea"
                                id="textarea"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                rows={5}
                                className="form-input"
                                key="textarea"
                                control={control}
                                fullWidth
                            />

                            <TextFormInput
                                label="Readonly"
                                type="text"
                                name="text1"
                                id="text1"
                                placeholder="Readonly value"
                                readOnly
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="form-input"
                                key="text1"
                                control={control}
                                fullWidth
                            />

                            <TextFormInput
                                label="Disabled"
                                type="text"
                                name="text2"
                                id="text2"
                                placeholder="Disabled value"
                                disabled
                                readOnly
                                className="form-input"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                key="text2"
                                control={control}
                                fullWidth
                            />

                            <div className="help-block mb-3">
                                <small>
                                    A block of help text that breaks onto a new line and may
                                    extend beyond one line.
                                </small>
                            </div>

                            <SelectFormInput
                                name="select"
                                label="Input Select"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="p-0"
                                key="select"
                                control={control}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                    { value: "3", label: "3" },
                                    { value: "4", label: "4" },
                                    { value: "5", label: "5" },
                                ]}
                                fullWidth
                            />
                        </form>
                    </div>

                    <div>
                        <form>
                            <SelectFormInput
                                name="selectMulti"
                                label="Multiple Select"
                                labelClassName="mb-2"
                                containerClassName="mb-3"
                                className="p-0"
                                key="selectMulti"
                                control={control}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                    { value: "3", label: "3" },
                                    { value: "4", label: "4" },
                                    { value: "5", label: "5" },
                                ]}
                            />

                            <TextFormInput
                                label="Default file input"
                                type="file"
                                name="file"
                                labelClassName="mb-2"
                                containerClassName="mb-3"
                                className="form-input border"
                                key="file"
                                control={control}
                                fullWidth
                            />

                            <DateFormInput
                                label="Date"
                                type="date"
                                name="date"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="form-input"
                                key="date"
                                control={control}
                                fullWidth
                            />

                            <DateFormInput
                                label="Month"
                                type="month"
                                name="month"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="form-input"
                                key="month"
                                control={control}
                                fullWidth
                            />

                            <DateFormInput
                                label="Time"
                                type="time"
                                name="time"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="form-input"
                                key="time"
                                control={control}
                                fullWidth
                            />

                            <DateFormInput
                                label="Week"
                                type="week"
                                name="week"
                                labelClassName="mb-2"
                                containerClassName="mb-3"
                                className="form-input"
                                key="week"
                                control={control}
                                fullWidth
                            />

                            <DateFormInput
                                label="Number"
                                type="number"
                                name="number"
                                containerClassName="mb-3"
                                labelClassName="mb-2"
                                className="form-input"
                                key="number"
                                control={control}
                                fullWidth
                            />

                            <TextFormInput
                                label="Color"
                                type="color"
                                name="color"
                                labelClassName="mb-2"
                                containerClassName="mb-3"
                                className="form-input h-12"
                                key="color"
                                control={control}
                                fullWidth
                            />
                            <label className="mb-3 text-sm font-medium text-default-900">
                                Range
                            </label>

                            <ReactSlider
                                className="mt-4 h-6 w-full max-w-[800px]"
                                thumbClassName="h-5 w-5 rounded-full -right-2.5 -top-1.5 outline-none cursor-pointer bg-primary border-2 transition-colors border-primary-600 hover:bg-primary-600"
                                trackClassName="bg-[#ddd] h-2 rounded-lg [&.slider-track-1]:bg-primary-400 slider-track"
                                min={5}
                                max={100}
                                defaultValue={[10, 60]}
                            />
                            {/* <TextFormInput
                       label="Range"
                       type="range"
                       name="range"
                       labelClassName="mb-2"
                       containerClassName="mt-5"
                       className="form-range mt-2"
                       key="Range"
                       control={control}
                       fullWidth
                      /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInputElements