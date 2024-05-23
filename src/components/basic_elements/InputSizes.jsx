import TextFormInput from "./TextFormInput";
import { useForm } from "react-hook-form";



const InputSizes = () => {
    const { control } = useForm();
    return (
        <div className="border border-default-200 rounded-lg">
            <div className="p-6">
                <h4 className="card-title mb-4">Input Sizes</h4>

                <form>
                    <TextFormInput
                        label="Small"
                        type="text"
                        name="small"
                        id="small1"
                        className="py-1 form-input-sm"
                        labelClassName="mb-2"
                        containerClassName="mb-3"
                        placeholder="Small Input"
                        control={control}
                        fullWidth
                    />

                    <TextFormInput
                        label="Normal (Default)"
                        type="text"
                        name="normal"
                        id="normal"
                        className="form-input py-2"
                        labelClassName="mb-2"
                        containerClassName="mb-3"
                        placeholder="Normal"
                        control={control}
                        fullWidth
                    />

                    <TextFormInput
                        label="Large"
                        type="text"
                        name="large"
                        id="large"
                        className="form-input py-3"
                        placeholder="Large Input"
                        labelClassName="mb-2"
                        containerClassName="mb-3"
                        control={control}
                        fullWidth
                    />
                </form>
            </div>
        </div>
    );
};

export default InputSizes