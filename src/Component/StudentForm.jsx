import { useState } from 'react'

function StudentForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    program: '',
    semester: '',
    gender: '',
    address: '',
    terms: false
  })
  {/* name = /^[A-Za-z ]+$/
       phonr = /^[0-9]+$/
       email= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       pass=  /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\s])\S{1,8}$/;
       const namePattern = /^[A-Za-z ]{3,}$/;
       if (!namePattern.test(formData.name)) {
  setError('Enter a valid name.')
  return
}
   */

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
 

  function handleChange(event) {

    const { name, value, type, checked } = event.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

    setError('')
    setSuccess('')
  }

  function handleSubmit(event) {

    event.preventDefault()

    setError('')
    setSuccess('')

    // Basic validation

    if (!formData.name) {
      setError('Please enter your name.')
      return
    }


    if (formData.name.length < 3) {
      setError('Name must be at least 3 characters.')
      return
    }
    for (let i = 0; i < formData.name.length; i++) {
      const element = formData.name[i]

      if (
        !(
          (element >= 'A' && element <= 'Z') ||
          (element >= 'a' && element <= 'z') ||
          element === ' '
        )
      ) {
        setError('Name must contain alphabets only.')
        return
      }
    }

    if (!formData.email) {
      setError('Please enter your email.')
      return
    }
    let hasAt = false;
    let hasDot = false
    for (let index = 0; index < formData.email.length; index++) {
      const element = formData.email[index];
      if (element === '@') {
        hasAt = true

      }
      if (element === '.') {
        hasDot = true

      }

    }
    if (!hasAt || !hasDot) {
      setError("enter valid email that contain @ or .")
      return
    }
    //password
        let hasLetter = false
        let hasNumber = false
        let hasSpecial = false
         if (formData.password==='') {
      setError('Please enter your password .')
      return
    }
    for (let i = 0; i < formData.password.length; i++) {
      const element = formData.password[i]

      if (
        (
          (element >= 'A' && element <= 'Z') ||
          (element >= 'a' && element <= 'z') 
          
        )
      ) {
        hasLetter = true
      }
      else if (element < '0' || element > '9') {
        hasNumber = true
      }
      else{
        hasSpecial = true
      }
    }

    
    if (formData.password.length > 8) {
        setError('at least 8 lenght password')
        return
      }
      if(!hasLetter || !hasNumber || !hasSpecial){
        setError("Password must cantain numbers letters and specail character")
        return
      }
    if (!formData.phone) {
      setError('Please enter your phone number.')
      return
    }
    if (formData.phone.length !== 11) {
      setError("must have 11 numbers")
      return

    }
    for (let i = 0; i < formData.phone.length; i++) {
      const element = formData.phone[i];
      if (element < '0' || element > '9') {
        setError('Numbers only')
        return
      }
    }


    if (!formData.program) {
      setError('Please select a program.')
      return
    }

    if (!formData.semester) {
      setError('Please select a semester.')
      return
    }

    if (!formData.gender) {
      setError('Please select your gender.')
      return
    }

    if (!formData.address) {
      setError('Please enter your address.')
      return
    }

    if (!formData.terms) {
      setError('Please accept the terms and conditions.')
      return
    }

    // Successful submission

    console.log('Student Information:')
    console.log(formData)

    setSuccess('Student registered successfully!')

    // Clear form

    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      semester: '',
      gender: '',
      address: '',
      terms: false
    })
  }

  return (
    <>
      <div className='container py 5'>


        <div className="card shadow-sm mx-auto w-100 " style={{ maxWidth: "750px" }}>

          <div className="card-body p-4 md-5">

            <h2 className=" text-center mb-4">
              Student Registration
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Name */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
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


              {/* Email */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>
              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  password
                </label>

                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>

              {/* Phone */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              {/* Program */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  Program
                </label>

                <select
                  name="program"
                  className="form-select"
                  value={formData.program}
                  onChange={handleChange}
                 
                >

                  <option value="">
                    Select Program
                  </option>

                  <option value="Computer Science">
                    Computer Science
                  </option>

                  <option value="Software Engineering">
                    Software Engineering
                  </option>

                  <option value="Information Technology">
                    Information Technology
                  </option>

                </select>
                {formData.program && (
  <p className="text-success mt-2 mb-0">
    You selected: {formData.program}
  </p>
)}

              </div>


              {/* Semester */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  Semester
                </label>

                <select
                  name="semester"
                  className="form-select"
                  value={formData.semester}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Semester
                  </option>

                  <option value="1">
                    Semester 1
                  </option>

                  <option value="2">
                    Semester 2
                  </option>

                  <option value="3">
                    Semester 3
                  </option>

                  <option value="4">
                    Semester 4
                  </option>

                  <option value="5">
                    Semester 5
                  </option>

                  <option value="6">
                    Semester 6
                  </option>

                  <option value="7">
                    Semester 7
                  </option>

                  <option value="8">
                    Semester 8
                  </option>

                </select>

              </div>


              {/* Gender */}

              <div className="mb-3 text-start d-block">

                <label className="form-label d-block">
                  Gender
                </label>

                <div className="form-check form-check-inline">

                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-check-input"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Male
                  </label>

                </div>


                <div className="form-check form-check-inline text-start d-block">

                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-check-input"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Female
                  </label>

                </div>

              </div>


              {/* Address */}

              <div className="mb-3 text-start d-block">

                <label className="form-label">
                  Address
                </label>

                <textarea
                  name="address"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />

              </div>


              {/* Terms */}

              <div className="mb-3">

                <div className="form-check">

                  <input
                    type="checkbox"
                    name="terms"
                    className="form-check-input"
                    checked={formData.terms}
                    onChange={handleChange}
                  />

                  <label className="form-check-label text-start d-block">
                    I agree to the terms and conditions.
                  </label>

                </div>

              </div>


              {/* Error Message */}

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}


              {/* Success Message */}

              {success && (
                <div className="alert alert-success">
                  {success}
                </div>
              )}


              {/* Submit */}

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Register Student
              </button>

            </form>

          </div>

        </div>
      </div>
    </>

  )
}

export default StudentForm
