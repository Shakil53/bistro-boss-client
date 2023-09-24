import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='w-full ml-14'>
            <SectionTitle subHeading="add item into menu"
                heading='Add Items'
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Type here" className="input input-bordered max-w-4xl " />

                </div>
                <div className="flex max-w-4xl">
                    {/* category ---------------*/}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Drink</option>
                            <option>Salad</option>
                            <option>Deserts</option>
                        </select>

                    </div>
                    {/* price ----------------*/}
                    <div className="form-control w-full ml-3">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true, minLength: 2, maxLength: 6 })} placeholder="Type here" className="input input-bordered w-full  " />

                    </div>
                </div>
                {/* textarea---------------- */}

                <div className="form-control max-w-4xl">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"  {...register("details", { required: true, minLength: 2, maxLength: 200 })} placeholder="Bio"></textarea>

                </div>
                {/* file input--------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image</span>

                    </label>
                    <input type="file" {...register("file", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                {/* btn */}
                <input className="btn btn-sm mt-4 mb-20" type="submit" value='Add Item'></input>
            </form>

        </div>
    );
};

export default AddItem;