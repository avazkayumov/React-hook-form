import { useForm } from "react-hook-form";


function App() {
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  })


  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }


  return (
    <div className="container">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
        Name :
        <input className="input_text" {...register('firstName', {
          required: "Name is required!",
          minLength: {
            value: 5,
            message: "First Name must be at least 3 characters long!"
          },
          maxLength: {
            value: 30,
            message: "First Name must be maximum 30 characters long!"
          }
        })}/>
        </label>
        <div className="errormessage">
          {errors?.firstName && <p>{errors?.firstName.message || "Error!"}</p>}
        </div>

        <label>Email :
          <input className="input_text" {...register('email', {
            required: "Email is required!",
            pattern: {
              value:  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Email must be valid!"
            }
          })} />
        </label>
        <div className="errormessage">
          {errors?.email && <p>{errors?.email.message || "Error!"}</p>}
        </div>

        <label>Password :
          <input className="input_text" {...register('password', {
            required: "Password is required!",
            pattern: {
              value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              message: "Password must contain at least 6 characters, one Uppercase, one Lowercase, one Number and one special case character!"
            }
          })} />
        </label>
        <div className="errormessage">
          {errors?.password && <p>{errors?.password.message || "Error!"}</p>}
        </div>


        <input className="btn_submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default App;
