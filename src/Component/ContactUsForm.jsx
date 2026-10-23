import { useState } from "react"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        fuclty: '',
        program: '',
        semester: '',
        contactNo: '',
        term: false

    });
    const [Error, setError] = useState('')
    const [success, setSuccess] = useState('')

    function handleChange(event) {
        const { name, value, type, check } = event.terget

       

        setFormData({
 ...formData,
            [name]: type === 'checkbox ' ? check : value
        }
        )
        setError('')
        setSuccess('')
    }
    function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setSuccess('')
        //basic validation
        if (!formData.name) {
            setError('Please enter name')
            return
        }
        if (formData.name.length < 3) {
            setError('Name must be atleast 3 character')
            return;
        }
        if (!formData.email) {
            setError('Please enter your email.')
            return
        }
        if (!formData.contactNo) {
            setError('Please enter your phone number.')
            return
        }
        if (!formData.program) {
            setError("Please enter your program")
            return
        }
        if (!formData.semester) {
            setError("Please enter your semester")
            return
        }
        if (!formData.fuclty) {
            setError("Please enter the faculty name ")
            return
        }

        console.log("Contact Information ")
        console.log(formData)
        setSuccess("Contact Request Send Successfully")
        // clear form
        setFormData(
            {
                name: '',
                email: '',
                password: '',
                fuclty: '',
                program: '',
                semester: '',
                contactNo: '',
                term: false

            }
        )

    }

    return (
        <>
        <div className='container py 5'>

    
    <div className="card shadow-sm mx-auto w-100 " style={{maxWidth: "750px"}}>

      <div className="card-body p-4 md-5">

        <h2 className=" text-center mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>
           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              email
            </label>

            <input
              type="email"
              name="email;"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />


          </div>
           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>
           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              Faculty Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your faculty name"
              value={formData.faculty}
              onChange={handleChange}
            />

          </div>

           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              Program
            </label>

            <input
              type="text"
              name="program"
              className="form-control"
              placeholder="Enter your program"
              value={formData.program}
              onChange={handleChange}
            />


          </div>
           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              Full N
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.program}
              onChange={handleChange}
            />

          </div>

 <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
                Contact No
            </label>

            <input
              type="text"
              name="contactNo"
              className="form-control"
              placeholder="Enter your Number"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

           <div className="mb-3 text-start d-block">

            <label className="form-label text-start d-block">
              Semester
            </label>

            <input
              type="text"
              name="semester"
              className="form-control"
              placeholder="Enter your semester"
              value={formData.semester}
              onChange={handleChange}
            />

          </div>
           <button type="submit" >Submit</button>

        </form>

      </div>

    </div>
    </div>
        </>
    )

}
export default ContactForm