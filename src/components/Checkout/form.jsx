import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './from.css'


const Form = ({ onSubmit, buyerData, setBuyerData}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm();

    const watchEmail = watch('email');
    const watchConfirmEmail = watch('confirmEmail');
    const watchName = watch('name');
    const watchAdress = watch('adress');
    const watchPhone  = watch('phone');


    const submitForm = (data) => {
        onSubmit(data)
    }

    useEffect(() => {
        if (buyerData.email) {
          setValue('email', buyerData.email);
        }
        if (buyerData.confirmEmail) {
          setValue('confirmEmail', buyerData.confirmEmail);
        }
      }, [buyerData.email, buyerData.confirmEmail, setValue]);

    return (
        <div className='form-compra'>
            <form onSubmit={handleSubmit(submitForm)} className="form-estilos">
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        placeholder='Name'
                        value={buyerData.name}
                        type="text"
                        {...register('name', {
                            required: true,
                        })}
                        onChange={(e) => setBuyerData({ ...buyerData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label>Adress</label>
                    <input
                        name="adress"
                        placeholder='Adress'
                        value={buyerData.adress}
                        type="text"
                        {...register('adress', {
                            required: true,
                            
                        })}
                        onChange={(e) => setBuyerData({ ...buyerData, adress: e.target.value })}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        name="phone"
                        placeholder='Phone'
                        value={buyerData.phone}
                        type="text"
                        {...register('phone', {
                            required: true,
                        })}
                        onChange={(e) => setBuyerData({ ...buyerData, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder='Email'
                        value={buyerData.email}
                        type="text"
                        {...register('email', {
                            required: true,
                            pattern: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                        })}
                        onChange={(e) => setBuyerData({ ...buyerData, email: e.target.value })}
                    />
                    {errors.email?.type === 'pattern' && (
                        <p>Invalid mail format</p>
                    )}
                </div>
                <div>
                    <label>Confirm Email</label>
                    <input
                        name="confirmEmail"
                        placeholder='Confirm Email'
                        value={buyerData.confirmEmail}
                        type="text"
                        {...register('confirmEmail', {
                            required: true,
                            validate: value =>
                                value === watchEmail || "Emails do not match"
                        })}
                        onChange={(e) => setBuyerData({ ...buyerData, confirmEmail: e.target.value })}
                    />
                    {errors.confirmEmail && (
                        <p>{errors.confirmEmail.message}</p>
                    )}
                </div>
                <button type="submit" className='button-submit' disabled={!watchEmail || !watchConfirmEmail}
                style={{ opacity: !watchEmail || !watchConfirmEmail || !watchAdress || !watchEmail || !watchName || !watchPhone ? 0.5 : 1, cursor: !watchEmail || !watchConfirmEmail ? 'not-allowed' : 'pointer' }}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
